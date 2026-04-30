import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { HcdCardList } from "../core/schema";
import "./sortable-row-list";
import "./card-drawer";

@customElement("hcd-cards-list-widget")
export class HcdCardsListWidget extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) node!: HcdCardList;
  @property({ attribute: false }) value: Record<string, unknown>[] = [];

  @state() private _drawerOpen = false;
  @state() private _drawerEditIndex?: number; // undefined = adding new
  @state() private _drawerDraft?: Record<string, unknown>; // current draft in drawer

  private _rowSummary(card: Record<string, unknown>): string {
    const type = (card.type as string) ?? "unknown";
    const label = ((card.entity ?? card.title ?? card.name ?? "") as string);
    return label ? `${type} · ${label}` : type;
  }

  render() {
    const cards = this.value;
    return html`
      <div class="cards-widget">
        ${this.node.title ? html`<div class="widget-title">${this.node.title}</div>` : ""}
        <hcd-sortable-row-list
          .count=${cards.length}
          @row-move=${this._onRowMove}
          @row-remove=${this._onRowRemove}
        >
          ${cards.map(
            (card, i) => html`
              <div slot="row-${i}" class="card-row-content">
                <span class="card-summary">${this._rowSummary(card)}</span>
                <ha-icon-button
                  class="edit-btn"
                  @click=${() => this._openEdit(i)}
                >
                  <ha-icon icon="mdi:pencil"></ha-icon>
                </ha-icon-button>
              </div>
            `
          )}
        </hcd-sortable-row-list>
        <div class="add-row">
          <mwc-button @click=${this._openAdd}>
            + ${this.node.addLabel ?? "Add card"}
          </mwc-button>
        </div>
      </div>

      ${this._drawerOpen
        ? html`
            <hcd-card-drawer
              .hass=${this.hass}
              .draft=${this._drawerDraft}
              .editIndex=${this._drawerEditIndex}
              @card-saved=${this._onCardSaved}
              @drawer-closed=${this._closeDrawer}
            ></hcd-card-drawer>
          `
        : ""}
    `;
  }

  private _openAdd() {
    this._drawerEditIndex = undefined;
    this._drawerDraft = undefined;
    this._drawerOpen = true;
  }

  private _openEdit(index: number) {
    this._drawerEditIndex = index;
    this._drawerDraft = { ...this.value[index] };
    this._drawerOpen = true;
  }

  private _closeDrawer() {
    this._drawerOpen = false;
    this._drawerDraft = undefined;
    this._drawerEditIndex = undefined;
  }

  private _onCardSaved(e: CustomEvent<{ config: Record<string, unknown> }>) {
    const config = e.detail.config;
    let cards: Record<string, unknown>[];
    if (this._drawerEditIndex !== undefined) {
      cards = this.value.map((c, i) =>
        i === this._drawerEditIndex ? config : c
      );
    } else {
      cards = [...this.value, config];
    }
    this._closeDrawer();
    this._emit(cards);
  }

  private _onRowMove(e: CustomEvent<{ from: number; to: number }>) {
    const cards = [...this.value];
    const [item] = cards.splice(e.detail.from, 1);
    cards.splice(e.detail.to, 0, item);
    this._emit(cards);
  }

  private _onRowRemove(e: CustomEvent<{ index: number }>) {
    this._emit(this.value.filter((_, i) => i !== e.detail.index));
  }

  private _emit(cards: Record<string, unknown>[]) {
    this.value = cards;
    this.dispatchEvent(
      new CustomEvent("value-changed", {
        detail: { value: { [this.node.name]: cards } },
        bubbles: false,
        composed: false,
      })
    );
  }

  static styles = css`
    :host {
      display: block;
    }
    .widget-title {
      font-weight: 500;
      padding: 8px 0;
    }
    .card-row-content {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 8px;
    }
    .card-summary {
      flex: 1;
      font-size: 14px;
    }
    .add-row {
      padding-top: 8px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "hcd-cards-list-widget": HcdCardsListWidget;
  }
}
