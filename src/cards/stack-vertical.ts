import type { CardSchema } from "../core/schema";
import { stackChildrenList } from "../core/widgets";

export const stackVerticalCard: CardSchema = {
  id: "stack-vertical",
  type: "vertical-stack",
  label: "Vertical Stack",
  category: "stock",
  description: "Stack multiple cards vertically.",
  icon: "mdi:arrow-expand-vertical",
  installed: () => !!customElements.get("hui-vertical-stack-card"),
  defaults: { type: "vertical-stack", cards: [] },
  yamlOrder: ["cards"],
  form: () => [stackChildrenList()],
};
