import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { CardSchema } from "../core/schema";
import { getCardSchema } from "../core/registry";
import { configToYaml } from "../core/yaml";

import "./card-list";
import "./card-form";
import "./card-preview";
import "./yaml-output";

@customElement("ha-card-designer-panel")
export class HaCardDesignerPanel extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) narrow = false;
  @property({ attribute: false }) route: unknown = null;

  @state() private _activeCardId?: string;
  @state() private _activeSchema?: CardSchema;
  @state() private _config: Record<string, unknown> = {};
  @state() private _yaml = "";

  // HA lazy-loads stock hui-* cards only when a Lovelace dashboard renders them.
  // Pre-register them on the first hass assignment so installed() checks work immediately.
  private _stockTypes = [
    "vertical-stack", "horizontal-stack", "gauge", "markdown",
    "glance", "entities", "grid",
  ];
  private _stockCardsRegistered = false;

  override updated(changedProps: Map<string, unknown>) {
    super.updated(changedProps);
    if (!this._stockCardsRegistered && changedProps.has("hass") && this.hass) {
      this._stockCardsRegistered = true;
      for (const type of this._stockTypes) {
        if (!customElements.get(`hui-${type}-card`)) {
          const el = document.createElement("hui-card") as HTMLElement & {
            config?: Record<string, unknown>;
            hass?: HomeAssistant;
          };
          el.style.display = "none";
          el.config = { type };
          el.hass = this.hass;
          document.body.appendChild(el);
        }
      }
      // Re-render card list after elements have had time to register
      setTimeout(() => {
        const list = this.shadowRoot?.querySelector("hcd-card-list") as LitElement | null;
        list?.requestUpdate();
      }, 500);
    }
  }

  private _onCardSelected(e: CustomEvent<string>) {
    const id = e.detail;
    const schema = getCardSchema(id);
    if (!schema) return;
    this._activeCardId = id;
    this._activeSchema = schema;
    this._config = { ...schema.defaults };
    this._updateYaml();
  }

  private _onConfigChanged(e: CustomEvent<Record<string, unknown>>) {
    this._config = e.detail;
    this._updateYaml();
  }

  private _updateYaml() {
    if (!this._activeSchema) { this._yaml = ""; return; }
    this._yaml = configToYaml(
      this._config,
      this._activeSchema.defaults,
      this._activeSchema.yamlOrder
    );
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--primary-background-color);
    }
    .topbar {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 20px;
      background: var(--app-header-background-color, var(--primary-color));
      color: var(--app-header-text-color, white);
      box-shadow: var(--shadow-elevation-4dp_-_box-shadow);
    }
    .topbar ha-icon { --mdc-icon-size: 24px; }
    .topbar h1 { margin: 0; font-size: 20px; font-weight: 400; }
    .main {
      flex: 1;
      display: flex;
      overflow: hidden;
    }
    .sidebar {
      width: 240px;
      flex-shrink: 0;
      border-right: 1px solid var(--divider-color);
      overflow: hidden;
    }
    .center {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .editor-row {
      flex: 1;
      display: flex;
      overflow: hidden;
    }
    hcd-card-form {
      flex: 1;
      border-right: 1px solid var(--divider-color);
    }
    hcd-card-preview {
      flex: 1;
    }
    hcd-yaml-output {
      flex-shrink: 0;
    }
  `;

  render() {
    return html`
      <div class="topbar">
        <ha-icon icon="mdi:palette"></ha-icon>
        <h1>Card Designer</h1>
      </div>
      <div class="main">
        <div class="sidebar">
          <hcd-card-list
            .hass=${this.hass}
            .activeCardId=${this._activeCardId}
            @card-selected=${this._onCardSelected}
          ></hcd-card-list>
        </div>
        <div class="center">
          <div class="editor-row">
            <hcd-card-form
              .hass=${this.hass}
              .schema=${this._activeSchema}
              .data=${this._config}
              @config-changed=${this._onConfigChanged}
            ></hcd-card-form>
            <hcd-card-preview
              .hass=${this.hass}
              .schema=${this._activeSchema}
              .config=${this._activeCardId ? this._config : undefined}
            ></hcd-card-preview>
          </div>
          <hcd-yaml-output .yaml=${this._yaml}></hcd-yaml-output>
        </div>
      </div>
    `;
  }
}
