import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { HcdSubFormList } from "../core/schema";
import "./sortable-row-list";

@customElement("hcd-sub-form-list")
export class HcdSubFormListElement extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) node!: HcdSubFormList;
  @property({ attribute: false }) value: Record<string, unknown>[] = [];

  static styles = css`
    :host {
      display: block;
    }
    .list-title {
      font-weight: 600;
      font-size: 14px;
      padding-bottom: 8px;
      color: var(--primary-text-color);
    }
    .add-row {
      padding-top: 8px;
    }
    .row-form {
      width: 100%;
    }
    ha-form {
      display: block;
    }
  `;

  private _addRow() {
    const newRow = { ...(this.node.itemDefaults ?? {}) };
    this._emit([...this.value, newRow]);
  }

  private _onRowMove(e: CustomEvent<{ from: number; to: number }>) {
    const rows = [...this.value];
    const [item] = rows.splice(e.detail.from, 1);
    rows.splice(e.detail.to, 0, item);
    this._emit(rows);
  }

  private _onRowRemove(e: CustomEvent<{ index: number }>) {
    const rows = this.value.filter((_, i) => i !== e.detail.index);
    this._emit(rows);
  }

  private _onRowChanged(e: CustomEvent, index: number) {
    const rows = this.value.map((r, i) =>
      i === index ? { ...r, ...e.detail.value } : r
    );
    this._emit(rows);
  }

  private _emit(rows: Record<string, unknown>[]) {
    this.value = rows;
    this.dispatchEvent(
      new CustomEvent("value-changed", {
        detail: { value: { [this.node.name]: rows } },
        bubbles: false,
        composed: false,
      })
    );
  }

  render() {
    const rows = this.value;
    return html`
      <div class="sub-form-list">
        ${this.node.title
          ? html`<div class="list-title">${this.node.title}</div>`
          : ""}
        <hcd-sortable-row-list
          .count=${rows.length}
          @row-move=${this._onRowMove}
          @row-remove=${this._onRowRemove}
        >
          ${rows.map(
            (row, i) => html`
              <div slot="row-${i}" class="row-form">
                <ha-form
                  .hass=${this.hass}
                  .data=${row}
                  .schema=${this.node.itemSchema}
                  .computeLabel=${(s: { label?: string; name: string }) =>
                    s.label ?? s.name}
                  @value-changed=${(e: CustomEvent) =>
                    this._onRowChanged(e, i)}
                ></ha-form>
              </div>
            `
          )}
        </hcd-sortable-row-list>
        <div class="add-row">
          <mwc-button @click=${this._addRow}>
            + ${this.node.addLabel ?? "Add"}
          </mwc-button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hcd-sub-form-list": HcdSubFormListElement;
  }
}
