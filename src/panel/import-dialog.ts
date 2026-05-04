import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("hcd-import-dialog")
export class HcdImportDialog extends LitElement {
  @state() private _open = false;
  @state() private _text = "";
  @state() private _error = "";

  open() {
    this._text = "";
    this._error = "";
    this._open = true;
  }

  private _close() {
    this._open = false;
  }

  private async _pasteFromClipboard() {
    try {
      this._text = await navigator.clipboard.readText();
      this._error = "";
    } catch {
      this._error = "Clipboard access denied. Paste manually below.";
    }
  }

  private _onFileLoad(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      this._text = (reader.result as string) ?? "";
      this._error = "";
    };
    reader.readAsText(file);
  }

  private _onImport() {
    if (!this._text.trim()) {
      this._error = "Nothing to import — paste or load a file first.";
      return;
    }
    this.dispatchEvent(new CustomEvent("yaml-imported", {
      detail: this._text,
      bubbles: true,
      composed: true,
    }));
  }

  setError(msg: string) {
    this._error = msg;
  }

  closeDialog() {
    this._close();
  }

  static styles = css`
    .overlay {
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
    }
    .dialog {
      background: var(--card-background-color, #fff);
      border-radius: 8px;
      box-shadow: var(--shadow-elevation-24dp_-_box-shadow, 0 11px 15px rgba(0,0,0,.2));
      width: 560px;
      max-width: 95vw;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .dialog-header {
      padding: 20px 24px 12px;
      font-size: 20px;
      font-weight: 400;
      color: var(--primary-text-color);
    }
    .dialog-content {
      padding: 0 24px 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .actions-row {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    label.file-label {
      cursor: pointer;
    }
    textarea {
      width: 100%;
      height: 240px;
      resize: vertical;
      font-family: "Roboto Mono", "Courier New", monospace;
      font-size: 12px;
      padding: 10px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      background: var(--primary-background-color, #fafafa);
      color: var(--primary-text-color);
      line-height: 1.5;
      box-sizing: border-box;
    }
    .error {
      color: var(--error-color, #b00020);
      font-size: 13px;
    }
    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      padding: 8px 16px 16px;
      border-top: 1px solid var(--divider-color);
    }
    input[type="file"] {
      display: none;
    }
  `;

  render() {
    if (!this._open) return html``;
    return html`
      <div class="overlay" @click=${(e: MouseEvent) => { if (e.target === e.currentTarget) this._close(); }}>
        <div class="dialog">
          <div class="dialog-header">Import YAML</div>
          <div class="dialog-content">
            <div class="actions-row">
              <mwc-button outlined @click=${this._pasteFromClipboard}>
                Paste from clipboard
              </mwc-button>
              <label class="file-label">
                <mwc-button outlined>Load file</mwc-button>
                <input
                  type="file"
                  accept=".yaml,.yml,.txt,.json"
                  @change=${this._onFileLoad}
                />
              </label>
            </div>
            <textarea
              .value=${this._text}
              placeholder="Paste card YAML here…"
              spellcheck="false"
              @input=${(e: InputEvent) => { this._text = (e.target as HTMLTextAreaElement).value; this._error = ""; }}
            ></textarea>
            ${this._error ? html`<div class="error">${this._error}</div>` : ""}
          </div>
          <div class="dialog-actions">
            <mwc-button @click=${this._close}>Cancel</mwc-button>
            <mwc-button unelevated @click=${this._onImport}>Import</mwc-button>
          </div>
        </div>
      </div>
    `;
  }
}
