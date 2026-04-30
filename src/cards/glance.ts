import type { CardSchema } from "../core/schema";
import { textSelector, booleanSelector, numberSelector, themeSelector } from "../core/selectors";

export const glanceCard: CardSchema = {
  id: "glance",
  type: "glance",
  label: "Glance",
  category: "stock",
  description: "Show multiple entity states in a compact icon grid.",
  icon: "mdi:eye",
  installed: () => !!customElements.get("hui-glance-card"),
  defaults: {
    type: "glance",
    entities: [],
    show_name: true,
    show_icon: true,
    show_state: true,
    columns: 5,
  },
  yamlOrder: ["title", "entities", "columns", "show_name", "show_icon", "show_state"],
  form: () => [
    textSelector("title", "Title"),
    numberSelector("columns", "Columns", { min: 1, max: 10 }),
    booleanSelector("show_name", "Show names", true),
    booleanSelector("show_icon", "Show icons", true),
    booleanSelector("show_state", "Show states", true),
    themeSelector(),
  ],
};
