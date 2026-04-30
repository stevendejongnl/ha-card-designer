import type { CardSchema } from "../core/schema";
import {
  entitySelector,
  textSelector,
  iconSelector,
  booleanSelector,
  themeSelector,
  actionSelector,
} from "../core/selectors";

export const tileCard: CardSchema = {
  id: "tile",
  type: "tile",
  label: "Tile",
  category: "stock",
  description: "A modern compact card that shows entity state and icon.",
  icon: "mdi:square-rounded",
  installed: () => !!customElements.get("hui-tile-card"),
  defaults: {
    type: "tile",
  },
  yamlOrder: ["name", "icon", "color", "vertical", "hide_state", "state_content"],
  form: () => [
    entitySelector("entity", "Entity", { required: true }),
    textSelector("name", "Name"),
    iconSelector("icon", "Icon"),
    textSelector("color", "Color (CSS variable or color)"),
    booleanSelector("vertical", "Vertical layout", false),
    booleanSelector("hide_state", "Hide state", false),
    themeSelector(),
    {
      type: "expandable",
      title: "Actions",
      icon: "mdi:gesture-tap",
      name: "_actions",
      schema: [
        actionSelector("tap_action", "Tap action"),
        actionSelector("hold_action", "Hold action"),
        actionSelector("icon_tap_action", "Icon tap action"),
      ],
    },
  ],
};
