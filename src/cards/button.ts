import type { CardSchema } from "../core/schema";
import {
  entitySelector,
  textSelector,
  iconSelector,
  booleanSelector,
  themeSelector,
  actionSelector,
} from "../core/selectors";

export const buttonCard: CardSchema = {
  id: "button",
  type: "button",
  label: "Button",
  category: "stock",
  description: "A clickable button card for triggering actions.",
  icon: "mdi:button-pointer",
  installed: () => !!customElements.get("hui-button-card"),
  defaults: {
    type: "button",
    show_name: true,
    show_icon: true,
    show_state: false,
  },
  yamlOrder: ["name", "icon", "show_name", "show_icon", "show_state"],
  form: () => [
    entitySelector("entity", "Entity"),
    textSelector("name", "Name"),
    iconSelector("icon", "Icon"),
    booleanSelector("show_name", "Show name", true),
    booleanSelector("show_icon", "Show icon", true),
    booleanSelector("show_state", "Show state", false),
    themeSelector(),
    {
      type: "expandable",
      title: "Actions",
      icon: "mdi:gesture-tap",
      name: "_actions",
      schema: [
        actionSelector("tap_action", "Tap action"),
        actionSelector("hold_action", "Hold action"),
        actionSelector("double_tap_action", "Double tap action"),
      ],
    },
  ],
};
