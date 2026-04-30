import type { CardSchema } from "../core/schema";
import { stackChildrenList } from "../core/widgets";

export const stackHorizontalCard: CardSchema = {
  id: "stack-horizontal",
  type: "horizontal-stack",
  label: "Horizontal Stack",
  category: "stock",
  description: "Stack multiple cards side by side.",
  icon: "mdi:arrow-expand-horizontal",
  installed: () => !!customElements.get("hui-horizontal-stack-card"),
  defaults: { type: "horizontal-stack", cards: [] },
  yamlOrder: ["cards"],
  form: () => [stackChildrenList()],
};
