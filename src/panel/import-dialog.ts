import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

@customElement("hcd-import-dialog")
export class HcdImportDialog extends LitElement {
  @state() private _text = "";
  @state() private _error = "";

  open() {
    this._text = "";
    this._error = "";
    const dialog = this.shadowRoot?.querySelector("ha-dialog") as HTMLElement & { show?: () => void };
    dialog?.show?.();
  }

  private _close() {
    const dialog = this.shadowRoot?.querySelector("ha-dialog") as HTMLElement & { close?: () => void };
    dialog?.close?.();
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
    ha-dialog {
      --mdc-dialog-min-width: 560px;
    }
    .content {
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
      background: var(--card-background-color, white);
      color: var(--primary-text-color);
      line-height: 1.5;
      box-sizing: border-box;
    }
    .error {
      color: var(--error-color, #b00020);
      font-size: 13px;
    }
    input[type="file"] {
      display: none;
    }
  `;

  render() {
    return html`
      <ha-dialog heading="Import YAML" @closed=${this._close}>
        <div class="content">
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
        <mwc-button slot="secondaryAction" @click=${this._close}>Cancel</mwc-button>
        <mwc-button slot="primaryAction" @click=${this._onImport}>Import</mwc-button>
      </ha-dialog>
    `;
  }
}
