import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("hcd-yaml-output")
export class HcdYamlOutput extends LitElement {
  @property({ type: String }) yaml = "";
  @property({ type: String }) parseError = "";
  @property({ type: Boolean, reflect: true }) narrow = false;
  @state() private _copied = false;
  @state() private _localText = "";
  @state() private _userEditing = false;

  private _debounceTimer: ReturnType<typeof setTimeout> | null = null;
  private _editSuppressTimer: ReturnType<typeof setTimeout> | null = null;

  override updated(changedProps: Map<string, unknown>) {
    if (changedProps.has("yaml") && !this._userEditing) {
      this._localText = this.yaml;
    }
  }

  private async _copy() {
    try {
      await navigator.clipboard.writeText(this._localText);
      this._copied = true;
      setTimeout(() => { this._copied = false; }, 2000);
    } catch {
      const ta = this.shadowRoot?.querySelector("textarea");
      if (ta) { ta.select(); document.execCommand("copy"); }
    }
  }

  private _onFocus() {
    this._userEditing = true;
    if (this._editSuppressTimer) {
      clearTimeout(this._editSuppressTimer);
      this._editSuppressTimer = null;
    }
  }

  private _onBlur() {
    if (this._editSuppressTimer) clearTimeout(this._editSuppressTimer);
    this._editSuppressTimer = setTimeout(() => {
      this._userEditing = false;
      if (!this.parseError) this._localText = this.yaml;
    }, 500);
  }

  private _onInput(e: InputEvent) {
    this._localText = (e.target as HTMLTextAreaElement).value;
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this._debounceTimer = setTimeout(() => {
      this.dispatchEvent(new CustomEvent("yaml-edited", {
        detail: this._localText,
        bubbles: true,
        composed: true,
      }));
    }, 300);
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      border-top: 1px solid var(--divider-color);
      height: 220px;
    }
    :host([narrow]) {
      height: 100%;
      border-top: none;
    }
    .toolbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px;
      border-bottom: 1px solid var(--divider-color);
    }
    .label {
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--secondary-text-color);
    }
    .textarea-wrap {
      flex: 1;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    textarea {
      flex: 1;
      resize: none;
      border: none;
      outline: none;
      padding: 12px 16px;
      font-family: "Roboto Mono", "Courier New", monospace;
      font-size: 12px;
      background: var(--card-background-color, white);
      color: var(--primary-text-color);
      line-height: 1.5;
    }
    /* Prevent iOS Safari from zooming when focusing the textarea */
    :host([narrow]) textarea {
      font-size: 16px;
    }
    .parse-error {
      padding: 4px 16px;
      background: var(--error-color, #b00020);
      color: white;
      font-size: 11px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
    }
    mwc-button ha-icon { --mdc-icon-size: 16px; }
  `;

  render() {
    const displayText = this._userEditing ? this._localText : (this.yaml || "");
    return html`
      <div class="toolbar">
        <span class="label">YAML</span>
        <mwc-button
          ?disabled=${!displayText}
          @click=${this._copy}
          ?dense=${!this.narrow}
        >
          <ha-icon icon=${this._copied ? "mdi:check" : "mdi:content-copy"}></ha-icon>
          ${this._copied ? "Copied!" : "Copy YAML"}
        </mwc-button>
      </div>
      <div class="textarea-wrap">
        <textarea
          .value=${displayText || "# Select or import a card to get started"}
          spellcheck="false"
          @focus=${this._onFocus}
          @blur=${this._onBlur}
          @input=${this._onInput}
        ></textarea>
        ${this.parseError ? html`<div class="parse-error">${this.parseError}</div>` : ""}
      </div>
    `;
  }
}
