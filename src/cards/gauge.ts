import type { CardSchema } from "../core/schema";
import {
  entitySelector,
  textSelector,
  numberSelector,
  booleanSelector,
  themeSelector,
  actionSelector,
} from "../core/selectors";

export const gaugeCard: CardSchema = {
  id: "gauge",
  type: "gauge",
  label: "Gauge",
  category: "stock",
  description: "Display a numeric sensor as a dial gauge.",
  icon: "mdi:gauge",
  installed: () => !!customElements.get("hui-gauge-card"),
  defaults: {
    type: "gauge",
    min: 0,
    max: 100,
    needle: false,
  },
  yamlOrder: ["name", "unit", "min", "max", "needle"],
  form: (_data) => [
    entitySelector("entity", "Entity", { required: true }),
    textSelector("name", "Name"),
    textSelector("unit", "Unit"),
    numberSelector("min", "Min", { mode: "box" }),
    numberSelector("max", "Max", { mode: "box" }),
    booleanSelector("needle", "Needle style", false),
    themeSelector(),
    {
      type: "expandable",
      title: "Actions",
      icon: "mdi:gesture-tap",
      name: "_actions",
      schema: [actionSelector("tap_action", "Tap action")],
    },
  ],
};
