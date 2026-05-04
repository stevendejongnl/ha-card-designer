import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { CardSchema } from "../core/schema";
import { ALL_CARDS, getCardSchema } from "../core/registry";
import { configToYaml, parseYamlToConfig } from "../core/yaml";

import "./card-list";
import "./card-form";
import "./card-preview";
import "./yaml-output";
import "./import-dialog";
import type { HcdImportDialog } from "./import-dialog";

type MobileTab = "cards" | "form" | "preview" | "yaml";

@customElement("ha-card-designer-panel")
export class HaCardDesignerPanel extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) narrow = false;
  @property({ attribute: false }) route: unknown = null;

  @state() private _activeCardId?: string;
  @state() private _activeSchema?: CardSchema;
  @state() private _config: Record<string, unknown> = {};
  @state() private _yaml = "";
  @state() private _yamlParseError = "";
  @state() private _isNarrow = false;
  @state() private _activeTab: MobileTab = "cards";

  // HA lazy-loads stock hui-* cards only when a Lovelace dashboard renders them.
  // Pre-register them on the first hass assignment so installed() checks work immediately.
  private _stockTypes = [
    "vertical-stack", "horizontal-stack", "gauge", "markdown",
    "glance", "entities", "grid",
  ];
  private _stockCardsRegistered = false;
  private _mq?: MediaQueryList;
  private _mqHandler = (e: MediaQueryListEvent) => { this._isNarrow = e.matches; };

  override connectedCallback() {
    super.connectedCallback();
    this._mq = window.matchMedia("(max-width: 900px)");
    this._isNarrow = this._mq.matches;
    this._mq.addEventListener("change", this._mqHandler);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._mq?.removeEventListener("change", this._mqHandler);
  }

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
    this._yamlParseError = "";
    this._updateYaml();
    if (this._isNarrow) this._activeTab = "form";
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

  /** Shared import logic used by both the dialog and the bidirectional YAML pane. */
  private _loadYaml(text: string): { ok: boolean; error?: string } {
    const result = parseYamlToConfig(text);
    if (!result.ok) return result;

    const cardEntry = ALL_CARDS.find((c) => c.type === result.type);
    if (!cardEntry) return { ok: false, error: `No schema found for type "${result.type}"` };

    this._activeCardId = cardEntry.id;
    this._activeSchema = cardEntry;
    this._config = result.config;
    this._yamlParseError = "";
    this._updateYaml();
    if (this._isNarrow) this._activeTab = "form";
    return { ok: true };
  }

  private _onYamlEdited(e: CustomEvent<string>) {
    const result = this._loadYaml(e.detail);
    if (!result.ok) {
      this._yamlParseError = result.error ?? "Parse error";
    }
  }

  private _onYamlImported(e: CustomEvent<string>) {
    const result = this._loadYaml(e.detail);
    const dialog = this.shadowRoot?.querySelector("hcd-import-dialog") as HcdImportDialog | null;
    if (!result.ok) {
      dialog?.setError(result.error ?? "Import failed");
    } else {
      dialog?.closeDialog();
    }
  }

  private _openImport() {
    const dialog = this.shadowRoot?.querySelector("hcd-import-dialog") as HcdImportDialog | null;
    dialog?.open();
  }

  private _topbar(compact = false) {
    return html`
      <div class="topbar">
        <ha-icon icon="mdi:palette"></ha-icon>
        <h1>Card Designer</h1>
        <mwc-button outlined @click=${this._openImport}>
          ${compact ? "Import" : "Import YAML"}
        </mwc-button>
      </div>
    `;
  }

  private _sharedPanes() {
    return html`
      <hcd-card-list
        .hass=${this.hass}
        .activeCardId=${this._activeCardId}
        .narrow=${this._isNarrow}
        @card-selected=${this._onCardSelected}
      ></hcd-card-list>
      <hcd-card-form
        .hass=${this.hass}
        .schema=${this._activeSchema}
        .data=${this._config}
        .narrow=${this._isNarrow}
        @config-changed=${this._onConfigChanged}
      ></hcd-card-form>
      <hcd-card-preview
        .hass=${this.hass}
        .schema=${this._activeSchema}
        .config=${this._activeCardId ? this._config : undefined}
        .narrow=${this._isNarrow}
      ></hcd-card-preview>
      <hcd-yaml-output
        .yaml=${this._yaml}
        .parseError=${this._yamlParseError}
        .narrow=${this._isNarrow}
        @yaml-edited=${this._onYamlEdited}
      ></hcd-yaml-output>
    `;
  }

  private _renderDesktop() {
    return html`
      ${this._topbar()}
      <div class="main">
        <div class="sidebar">
          <hcd-card-list
            .hass=${this.hass}
            .activeCardId=${this._activeCardId}
            .narrow=${false}
            @card-selected=${this._onCardSelected}
          ></hcd-card-list>
        </div>
        <div class="center">
          <div class="editor-row">
            <hcd-card-form
              .hass=${this.hass}
              .schema=${this._activeSchema}
              .data=${this._config}
              .narrow=${false}
              @config-changed=${this._onConfigChanged}
            ></hcd-card-form>
            <hcd-card-preview
              .hass=${this.hass}
              .schema=${this._activeSchema}
              .config=${this._activeCardId ? this._config : undefined}
              .narrow=${false}
            ></hcd-card-preview>
          </div>
          <hcd-yaml-output
            .yaml=${this._yaml}
            .parseError=${this._yamlParseError}
            .narrow=${false}
            @yaml-edited=${this._onYamlEdited}
          ></hcd-yaml-output>
        </div>
      </div>
      <hcd-import-dialog @yaml-imported=${this._onYamlImported}></hcd-import-dialog>
    `;
  }

  private _renderMobile() {
    const tabs: { id: MobileTab; icon: string; label: string }[] = [
      { id: "cards",   icon: "mdi:view-list",   label: "Cards"   },
      { id: "form",    icon: "mdi:pencil",       label: "Form"    },
      { id: "preview", icon: "mdi:eye",          label: "Preview" },
      { id: "yaml",    icon: "mdi:code-braces",  label: "YAML"    },
    ];

    return html`
      ${this._topbar(true)}
      <div class="mobile-content">
        <div class="pane ${this._activeTab === "cards" ? "active" : ""}">
          <hcd-card-list
            .hass=${this.hass}
            .activeCardId=${this._activeCardId}
            .narrow=${true}
            @card-selected=${this._onCardSelected}
          ></hcd-card-list>
        </div>
        <div class="pane ${this._activeTab === "form" ? "active" : ""}">
          <hcd-card-form
            .hass=${this.hass}
            .schema=${this._activeSchema}
            .data=${this._config}
            .narrow=${true}
            @config-changed=${this._onConfigChanged}
          ></hcd-card-form>
        </div>
        <div class="pane ${this._activeTab === "preview" ? "active" : ""}">
          <hcd-card-preview
            .hass=${this.hass}
            .schema=${this._activeSchema}
            .config=${this._activeCardId ? this._config : undefined}
            .narrow=${true}
          ></hcd-card-preview>
        </div>
        <div class="pane ${this._activeTab === "yaml" ? "active" : ""}">
          <hcd-yaml-output
            .yaml=${this._yaml}
            .parseError=${this._yamlParseError}
            .narrow=${true}
            @yaml-edited=${this._onYamlEdited}
          ></hcd-yaml-output>
        </div>
      </div>
      <nav class="tab-bar">
        ${tabs.map((t) => html`
          <button
            class="tab-btn ${this._activeTab === t.id ? "active" : ""}"
            @click=${() => { this._activeTab = t.id; }}
          >
            <ha-icon .icon=${t.icon}></ha-icon>
            <span>${t.label}</span>
          </button>
        `)}
      </nav>
      <hcd-import-dialog @yaml-imported=${this._onYamlImported}></hcd-import-dialog>
    `;
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
      padding-top: max(12px, calc(12px + env(safe-area-inset-top)));
      background: var(--app-header-background-color, var(--primary-color));
      color: var(--app-header-text-color, white);
      box-shadow: var(--shadow-elevation-4dp_-_box-shadow);
      flex-shrink: 0;
    }
    .topbar ha-icon { --mdc-icon-size: 24px; }
    .topbar h1 { margin: 0; font-size: 20px; font-weight: 400; flex: 1; }
    .topbar mwc-button {
      --mdc-theme-primary: var(--app-header-text-color, white);
      --mdc-button-outline-color: var(--app-header-text-color, white);
    }

    /* ── Desktop layout ────────────────────────────────── */
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
      min-width: 0;
    }
    hcd-card-preview {
      flex: 1;
      min-width: 0;
    }
    hcd-yaml-output {
      flex-shrink: 0;
    }

    /* ── Mobile layout ─────────────────────────────────── */
    .mobile-content {
      flex: 1;
      position: relative;
      overflow: hidden;
    }
    .pane {
      display: none;
      position: absolute;
      inset: 0;
      flex-direction: column;
      overflow: hidden;
    }
    .pane.active {
      display: flex;
    }
    .pane > * {
      flex: 1;
      min-height: 0;
      width: 100%;
    }
    .tab-bar {
      display: flex;
      flex-shrink: 0;
      background: var(--card-background-color, white);
      border-top: 1px solid var(--divider-color);
      padding-bottom: env(safe-area-inset-bottom);
    }
    .tab-btn {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      padding: 8px 4px;
      min-height: 56px;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--secondary-text-color);
      font-size: 11px;
      font-weight: 500;
      transition: color 0.15s;
      -webkit-tap-highlight-color: transparent;
    }
    .tab-btn ha-icon {
      --mdc-icon-size: 22px;
    }
    .tab-btn.active {
      color: var(--primary-color);
    }
    .tab-btn.active ha-icon {
      --mdc-icon-size: 22px;
    }
  `;

  render() {
    return this._isNarrow ? this._renderMobile() : this._renderDesktop();
  }
}
