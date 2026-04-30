import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("hcd-sortable-row-list")
export class HcdSortableRowList extends LitElement {
  @property({ type: Number }) count = 0;

  @state() private _dragIndex?: number;
  @state() private _hoverIndex?: number;
  @state() private _hoverSide?: "above" | "below";

  private _dispatchRowMove(from: number, to: number) {
    this.dispatchEvent(
      new CustomEvent("row-move", { detail: { from, to }, bubbles: false, composed: false })
    );
  }

  private _dispatchRowRemove(index: number) {
    this.dispatchEvent(
      new CustomEvent("row-remove", { detail: { index }, bubbles: false, composed: false })
    );
  }

  private _onDragStart(e: DragEvent, i: number) {
    const target = e.target as Element;
    if (!target.closest(".drag-handle")) {
      e.preventDefault();
      return;
    }
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = "move";
    }
    this._dragIndex = i;
  }

  private _onDragOver(e: DragEvent, i: number) {
    e.preventDefault();
    const wrapper = (e.currentTarget as HTMLElement);
    const rect = wrapper.getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    this._hoverSide = e.clientY < midY ? "above" : "below";
    this._hoverIndex = i;
    this.requestUpdate();
  }

  private _onDrop(e: DragEvent, i: number) {
    e.preventDefault();
    if (this._dragIndex === undefined) return;
    const wrapper = (e.currentTarget as HTMLElement);
    const rect = wrapper.getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    const side = e.clientY < midY ? "above" : "below";
    const targetIndex = side === "above" ? i : i + 1;
    const from = this._dragIndex;
    this._dragIndex = undefined;
    this._hoverIndex = undefined;
    this._hoverSide = undefined;
    this._dispatchRowMove(from, targetIndex);
  }

  private _onDragEnd() {
    this._dragIndex = undefined;
    this._hoverIndex = undefined;
    this._hoverSide = undefined;
    this.requestUpdate();
  }

  private _renderInsertLine(i: number) {
    if (
      this._hoverIndex !== i ||
      this._dragIndex === undefined ||
      this._dragIndex === i
    ) {
      return html``;
    }
    return html`<div class="insert-line insert-line--${this._hoverSide}"></div>`;
  }

  private _renderRow(i: number) {
    const isFirst = i === 0;
    const isLast = i === this.count - 1;

    return html`
      <div
        class="row-wrapper"
        data-index="${i}"
        draggable="true"
        @dragstart=${(e: DragEvent) => this._onDragStart(e, i)}
        @dragover=${(e: DragEvent) => this._onDragOver(e, i)}
        @drop=${(e: DragEvent) => this._onDrop(e, i)}
        @dragend=${() => this._onDragEnd()}
      >
        ${this._renderInsertLine(i)}
        <ha-icon icon="mdi:drag" class="drag-handle" draggable="true"></ha-icon>
        <div class="row-content">
          <slot name="row-${i}"></slot>
        </div>
        <div class="row-controls">
          <ha-icon-button
            class=${isFirst ? "control-btn disabled" : "control-btn"}
            .disabled=${isFirst}
            @click=${() => !isFirst && this._dispatchRowMove(i, i - 1)}
            title="Move up"
          >
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            class=${isLast ? "control-btn disabled" : "control-btn"}
            .disabled=${isLast}
            @click=${() => !isLast && this._dispatchRowMove(i, i + 1)}
            title="Move down"
          >
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </ha-icon-button>
          <ha-icon-button
            class="control-btn"
            @click=${() => this._dispatchRowRemove(i)}
            title="Remove"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
    .row-list {
      display: flex;
      flex-direction: column;
    }
    .row-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0;
      border-bottom: 1px solid var(--divider-color);
    }
    .drag-handle {
      cursor: grab;
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }
    .drag-handle:active {
      cursor: grabbing;
    }
    .row-content {
      flex: 1;
      min-width: 0;
    }
    .row-controls {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }
    .control-btn {
      color: var(--secondary-text-color);
    }
    .control-btn.disabled {
      opacity: 0.3;
      pointer-events: none;
    }
    .insert-line {
      position: absolute;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--primary-color);
      pointer-events: none;
      z-index: 1;
    }
    .insert-line--above {
      top: -1px;
    }
    .insert-line--below {
      bottom: -1px;
    }
  `;

  render() {
    return html`
      <div class="row-list">
        ${Array.from({ length: this.count }, (_, i) => this._renderRow(i))}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hcd-sortable-row-list": HcdSortableRowList;
  }
}
