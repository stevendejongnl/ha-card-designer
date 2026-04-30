import type { CardSchema } from "../core/schema";
import { numberSelector } from "../core/selectors";

export const stackGridCard: CardSchema = {
  id: "stack-grid",
  type: "grid",
  label: "Grid",
  category: "stock",
  description: "Arrange cards in a CSS grid layout.",
  icon: "mdi:view-grid",
  installed: () => !!customElements.get("hui-grid-card"),
  defaults: { type: "grid", columns: 2, square: true, cards: [] },
  yamlOrder: ["columns", "square", "cards"],
  form: () => [
    numberSelector("columns", "Columns", { min: 1, max: 12 }),
    {
      name: "square",
      label: "Square cells",
      selector: { boolean: {} },
      default: true,
    },
  ],
};
