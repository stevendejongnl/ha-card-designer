import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("hcd-yaml-output")
export class HcdYamlOutput extends LitElement {
  @property({ type: String }) yaml = "";
  @state() private _copied = false;

  private async _copy() {
    try {
      await navigator.clipboard.writeText(this.yaml);
      this._copied = true;
      setTimeout(() => { this._copied = false; }, 2000);
    } catch {
      // fallback: select the text
      const ta = this.shadowRoot?.querySelector("textarea");
      if (ta) { ta.select(); document.execCommand("copy"); }
    }
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      border-top: 1px solid var(--divider-color);
      height: 220px;
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
    mwc-button ha-icon { --mdc-icon-size: 16px; }
  `;

  render() {
    return html`
      <div class="toolbar">
        <span class="label">YAML output</span>
        <mwc-button
          ?disabled=${!this.yaml}
          @click=${this._copy}
          dense
        >
          <ha-icon icon=${this._copied ? "mdi:check" : "mdi:content-copy"}></ha-icon>
          ${this._copied ? "Copied!" : "Copy YAML"}
        </mwc-button>
      </div>
      <textarea
        readonly
        .value=${this.yaml || "# Select and configure a card to generate YAML"}
        spellcheck="false"
      ></textarea>
    `;
  }
}
