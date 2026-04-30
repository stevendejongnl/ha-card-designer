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

  private _debounceTimer?: ReturnType<typeof setTimeout>;
  private _rendered = false;

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
      this._rendered = true;
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
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color);
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .preview-area {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      background: var(--secondary-background-color);
    }
    .card-slot {
      max-width: 400px;
      margin: 0 auto;
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
    if (!this.config) {
      return html`
        <div class="header">Preview</div>
        <div class="preview-area">
          <div class="empty">
            <ha-icon icon="mdi:card-outline"></ha-icon>
            <span>Configure a card to see the preview</span>
          </div>
        </div>
      `;
    }

    return html`
      <div class="header">Preview · live</div>
      <div class="preview-area">
        ${this._loading ? html`<ha-circular-progress active></ha-circular-progress>` : ""}
        ${this._error ? html`<div class="error">${this._error}</div>` : ""}
        <div class="card-slot"></div>
      </div>
    `;
  }
}
