import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { CardSchema } from "../core/schema";
import { ALL_CARDS, getCardSchemaByType } from "../core/registry";
import "./card-form";

@customElement("hcd-card-drawer")
export class HcdCardDrawer extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) draft?: Record<string, unknown>; // pre-populated for edit
  @property({ type: Number }) editIndex?: number; // undefined = adding

  @state() private _step: "pick" | "edit" = "pick";
  @state() private _draft: Record<string, unknown> = {};
  @state() private _selectedSchema?: CardSchema;

  connectedCallback() {
    super.connectedCallback();
    // If editing an existing card, skip straight to edit step
    if (this.draft && this.draft.type) {
      const schema = getCardSchemaByType(this.draft.type as string);
      if (schema) {
        this._selectedSchema = schema;
        this._draft = { ...this.draft };
        this._step = "edit";
      }
    }
  }

  private _selectCard(schema: CardSchema) {
    this._selectedSchema = schema;
    this._draft = { ...schema.defaults };
    this._step = "edit";
  }

  private _backToPick() {
    // Only allow going back when adding new; if editing, cancel instead
    if (this.editIndex !== undefined) {
      this._cancel();
    } else {
      this._step = "pick";
      this._selectedSchema = undefined;
      this._draft = {};
    }
  }

  private _onDraftChanged(e: CustomEvent) {
    e.stopPropagation(); // CRITICAL: stop before it reaches root panel
    this._draft = { ...e.detail };
  }

  private _save() {
    this.dispatchEvent(
      new CustomEvent("card-saved", {
        detail: { config: this._draft },
        bubbles: false,
        composed: false,
      })
    );
  }

  private _cancel() {
    this.dispatchEvent(
      new CustomEvent("drawer-closed", {
        bubbles: false,
        composed: false,
      })
    );
  }

  render() {
    if (this._step === "pick") {
      return this._renderPickStep();
    }
    return this._renderEditStep();
  }

  private _renderPickStep() {
    const installedCards = ALL_CARDS.filter((c) => c.installed(this.hass));
    return html`
      <div class="drawer-header">
        <ha-icon-button @click=${this._cancel}>
          <ha-icon icon="mdi:close"></ha-icon>
        </ha-icon-button>
        <span class="header-title">Select card type</span>
      </div>
      <div class="pick-list">
        ${installedCards.map(
          (c) => html`
            <div class="pick-item" @click=${() => this._selectCard(c)}>
              <ha-icon .icon=${c.icon}></ha-icon>
              <span>${c.label}</span>
            </div>
          `
        )}
      </div>
    `;
  }

  private _renderEditStep() {
    return html`
      <div class="drawer-header">
        <ha-icon-button @click=${this._backToPick}>
          <ha-icon icon="mdi:arrow-left"></ha-icon>
        </ha-icon-button>
        <span class="header-title">${this._selectedSchema?.label ?? "Edit card"}</span>
      </div>
      <div class="drawer-form">
        <hcd-card-form
          .hass=${this.hass}
          .schema=${this._selectedSchema}
          .data=${this._draft}
          @config-changed=${this._onDraftChanged}
        ></hcd-card-form>
      </div>
      <div class="drawer-footer">
        <mwc-button @click=${this._save}>Save</mwc-button>
        <mwc-button @click=${this._cancel}>Cancel</mwc-button>
      </div>
    `;
  }

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 420px;
      background: var(--card-background-color, var(--primary-background-color));
      box-shadow: -4px 0 16px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      z-index: 100;
    }
    .drawer-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color);
      flex-shrink: 0;
    }
    .header-title {
      font-size: 16px;
      font-weight: 500;
      flex: 1;
    }
    .pick-list {
      flex: 1;
      overflow-y: auto;
      padding: 8px 0;
    }
    .pick-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      cursor: pointer;
      transition: background 0.15s;
    }
    .pick-item:hover {
      background: var(--secondary-background-color);
    }
    .pick-item ha-icon {
      --mdc-icon-size: 20px;
      color: var(--primary-color);
    }
    .pick-item span {
      font-size: 14px;
    }
    .drawer-form {
      flex: 1;
      overflow-y: auto;
    }
    .drawer-footer {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
      padding: 12px 16px;
      border-top: 1px solid var(--divider-color);
      flex-shrink: 0;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "hcd-card-drawer": HcdCardDrawer;
  }
}
