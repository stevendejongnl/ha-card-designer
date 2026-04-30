import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { CardSchema } from "../core/schema";
import type { HomeAssistant } from "custom-card-helpers";

@customElement("hcd-card-form")
export class HcdCardForm extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) schema?: CardSchema;
  @property({ attribute: false }) data: Record<string, unknown> = {};

  private _handleValueChanged(e: CustomEvent) {
    this.data = e.detail.value;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { ...this.data, type: this.schema?.type },
        bubbles: true,
        composed: true,
      })
    );
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }
    .header {
      padding: 16px;
      border-bottom: 1px solid var(--divider-color);
    }
    .header h2 {
      margin: 0 0 4px;
      font-size: 18px;
    }
    .header p {
      margin: 0;
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .form-wrapper {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
    }
    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color);
      gap: 12px;
    }
    ha-icon { --mdc-icon-size: 48px; }
  `;

  render() {
    if (!this.schema) {
      return html`
        <div class="empty">
          <ha-icon icon="mdi:arrow-left"></ha-icon>
          <span>Select a card type from the list</span>
        </div>
      `;
    }

    const formSchema = this.schema.form(this.data);

    return html`
      <div class="header">
        <h2>${this.schema.label}</h2>
        <p>${this.schema.description}</p>
      </div>
      <div class="form-wrapper">
        <ha-form
          .hass=${this.hass}
          .data=${this.data}
          .schema=${formSchema}
          .computeLabel=${(s: { label?: string; name: string }) => s.label ?? s.name}
          @value-changed=${this._handleValueChanged}
        ></ha-form>
      </div>
    `;
  }
}
