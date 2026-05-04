import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createThing } from "custom-card-helpers";
import type { HomeAssistant } from "custom-card-helpers";
import type { CardSchema } from "../core/schema";

@customElement("hcd-card-preview")
export class HcdCardPreview extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) schema?: CardSchema;
  @property({ attribute: false }) config?: Record<string, unknown>;
  @state() private _error?: string;
  @state() private _loading = false;
  @state() private _darkMode = false;
  @state() private _mobileView = false;

  private _debounceTimer?: ReturnType<typeof setTimeout>;

  updated(changed: Map<string, unknown>) {
    if (changed.has("config") || changed.has("hass")) {
      clearTimeout(this._debounceTimer);
      this._debounceTimer = setTimeout(() => this._renderPreview(), 150);
    }
  }

  private async _ensureResourceLoaded(resourceUrl: string): Promise<void> {
    if (document.querySelector(`script[src="${resourceUrl}"]`)) return;
    return new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.type = "module";
      s.src = resourceUrl;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error(`Failed to load: ${resourceUrl}`));
      document.head.appendChild(s);
    });
  }

  private async _renderPreview() {
    if (!this.config || !this.schema) return;

    const slot = this.shadowRoot?.querySelector(".card-slot");
    if (!slot) return;

    this._error = undefined;

    if (this.schema.resourceUrl && !this.schema.installed(this.hass)) {
      this._loading = true;
      try {
        await this._ensureResourceLoaded(this.schema.resourceUrl);
        await new Promise((r) => setTimeout(r, 200));
      } catch {
        this._error = `Could not load card resource. Install ${this.schema.label} via HACS first.`;
        this._loading = false;
        return;
      }
      this._loading = false;
    }

    try {
      const el = createThing(this.config as any) as any;
      el.hass = this.hass;
      slot.replaceChildren(el);
    } catch (err) {
      this._error = String(err);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this._debounceTimer);
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      border-bottom: 1px solid var(--divider-color);
      flex-shrink: 0;
    }
    .header-label {
      padding: 12px 0;
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .toolbar {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .toolbar-group {
      display: flex;
      align-items: center;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
    }
    .toolbar-group + .toolbar-group {
      margin-left: 4px;
    }
    .toolbar-btn {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      color: var(--secondary-text-color);
      white-space: nowrap;
      transition: background 0.15s, color 0.15s;
    }
    .toolbar-btn ha-icon {
      --mdc-icon-size: 14px;
    }
    .toolbar-btn:hover {
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
    }
    .toolbar-btn.active {
      background: var(--primary-color);
      color: var(--text-primary-color, white);
    }
    .preview-area {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      background: var(--secondary-background-color);
      transition: background 0.2s;
    }
    .preview-area.dark {
      --primary-background-color: #111827;
      --secondary-background-color: #1f2937;
      --card-background-color: #1f2937;
      --ha-card-background: #1f2937;
      --primary-text-color: #f9fafb;
      --secondary-text-color: #9ca3af;
      --text-primary-color: #f9fafb;
      --primary-color: #6366f1;
      --accent-color: #818cf8;
      --divider-color: rgba(255, 255, 255, 0.12);
      --disabled-text-color: #6b7280;
      --error-color: #ef4444;
      --warning-color: #f59e0b;
      --success-color: #22c55e;
      --info-color: #3b82f6;
      --state-icon-color: #9ca3af;
      --paper-item-icon-color: #9ca3af;
      background: #111827;
    }
    .card-slot {
      margin: 0 auto;
      transition: max-width 0.2s ease;
    }
    .card-slot.desktop { max-width: 100%; }
    .card-slot.mobile  { max-width: 375px; }
    .mobile-frame {
      display: none;
    }
    .card-slot.mobile .mobile-frame {
      display: block;
    }
    .error {
      padding: 12px;
      background: var(--error-color, #b00020);
      color: white;
      border-radius: 8px;
      font-size: 13px;
      white-space: pre-wrap;
    }
    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--secondary-text-color);
      gap: 8px;
    }
    ha-icon { --mdc-icon-size: 40px; }
    ha-circular-progress { margin: auto; display: block; }
  `;

  render() {
    const slotClass = this._mobileView ? "mobile" : "desktop";
    const areaClass = this._darkMode ? "dark" : "";

    if (!this.config) {
      return html`
        <div class="header">
          <span class="header-label">Preview</span>
          ${this._toolbar()}
        </div>
        <div class="preview-area ${areaClass}">
          <div class="empty">
            <ha-icon icon="mdi:card-outline"></ha-icon>
            <span>Configure a card to see the preview</span>
          </div>
        </div>
      `;
    }

    return html`
      <div class="header">
        <span class="header-label">Preview · live</span>
        ${this._toolbar()}
      </div>
      <div class="preview-area ${areaClass}">
        ${this._loading ? html`<ha-circular-progress active></ha-circular-progress>` : ""}
        ${this._error ? html`<div class="error">${this._error}</div>` : ""}
        <div class="card-slot ${slotClass}"></div>
      </div>
    `;
  }

  private _toolbar() {
    return html`
      <div class="toolbar">
        <div class="toolbar-group">
          <button
            class="toolbar-btn ${!this._darkMode ? "active" : ""}"
            title="Light theme"
            @click=${() => { this._darkMode = false; }}
          >
            <ha-icon icon="mdi:weather-sunny"></ha-icon>
            Light
          </button>
          <button
            class="toolbar-btn ${this._darkMode ? "active" : ""}"
            title="Dark theme"
            @click=${() => { this._darkMode = true; }}
          >
            <ha-icon icon="mdi:weather-night"></ha-icon>
            Dark
          </button>
        </div>
        <div class="toolbar-group">
          <button
            class="toolbar-btn ${!this._mobileView ? "active" : ""}"
            title="Desktop viewport"
            @click=${() => { this._mobileView = false; }}
          >
            <ha-icon icon="mdi:monitor"></ha-icon>
            Desktop
          </button>
          <button
            class="toolbar-btn ${this._mobileView ? "active" : ""}"
            title="Mobile viewport (375px)"
            @click=${() => { this._mobileView = true; }}
          >
            <ha-icon icon="mdi:cellphone"></ha-icon>
            Mobile
          </button>
        </div>
      </div>
    `;
  }
}
