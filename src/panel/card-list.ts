import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { CardSchema } from "../core/schema";
import { ALL_CARDS } from "../core/registry";
import type { HomeAssistant } from "custom-card-helpers";

@customElement("hcd-card-list")
export class HcdCardList extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ type: String }) activeCardId?: string;
  @state() private _search = "";

  private _categories = ["stock", "mushroom", "custom"] as const;

  private get _filteredCards(): CardSchema[] {
    const q = this._search.toLowerCase();
    return ALL_CARDS.filter(
      (c) =>
        !q || c.label.toLowerCase().includes(q) || c.category.includes(q)
    );
  }

  private _selectCard(id: string) {
    this.dispatchEvent(new CustomEvent("card-selected", { detail: id, bubbles: true, composed: true }));
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }
    .search {
      padding: 12px;
      border-bottom: 1px solid var(--divider-color);
    }
    ha-textfield {
      width: 100%;
    }
    .list {
      flex: 1;
      overflow-y: auto;
      padding: 8px 0;
    }
    .category-header {
      padding: 8px 16px 4px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--secondary-text-color);
    }
    .card-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px;
      cursor: pointer;
      border-radius: 8px;
      margin: 0 8px;
      transition: background 0.15s;
    }
    .card-item:hover {
      background: var(--secondary-background-color);
    }
    .card-item.active {
      background: var(--primary-color);
      color: var(--text-primary-color);
    }
    .card-item.disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    ha-icon {
      --mdc-icon-size: 20px;
    }
    .label {
      flex: 1;
      font-size: 14px;
    }
    .not-installed {
      font-size: 10px;
      color: var(--warning-color);
    }
  `;

  render() {
    const filtered = this._filteredCards;
    return html`
      <div class="search">
        <ha-textfield
          .label=${"Search cards"}
          .value=${this._search}
          @input=${(e: Event) => { this._search = (e.target as HTMLInputElement).value; }}
        ></ha-textfield>
      </div>
      <div class="list">
        ${this._categories.map((cat) => {
          const cards = filtered.filter((c) => c.category === cat);
          if (!cards.length) return "";
          return html`
            <div class="category-header">${cat}</div>
            ${cards.map((card) => {
              const inst = card.installed(this.hass);
              return html`
                <div
                  class="card-item ${this.activeCardId === card.id ? "active" : ""} ${!inst ? "disabled" : ""}"
                  @click=${() => inst && this._selectCard(card.id)}
                  title=${!inst ? "Card not installed — install via HACS first" : card.description}
                >
                  <ha-icon .icon=${card.icon}></ha-icon>
                  <span class="label">${card.label}</span>
                  ${!inst ? html`<span class="not-installed">Not installed</span>` : ""}
                </div>
              `;
            })}
          `;
        })}
      </div>
    `;
  }
}
