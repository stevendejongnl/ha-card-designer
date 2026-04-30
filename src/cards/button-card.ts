import type { CardSchema } from "../core/schema";
import {
  entitySelector,
  textSelector,
  iconSelector,
  booleanSelector,
  selectSelector,
  actionSelector,
} from "../core/selectors";

const LAYOUT_OPTIONS = [
  { value: "vertical", label: "Vertical (default)" },
  { value: "horizontal", label: "Horizontal" },
  { value: "icon_name_state2nd", label: "Icon + name + state" },
  { value: "name_state2nd", label: "Name + state" },
];

export const buttonCardCustom: CardSchema = {
  id: "button-card",
  type: "custom:button-card",
  label: "Button Card",
  category: "custom",
  description: "Highly customizable button (non-template fields only; use YAML for advanced templating).",
  icon: "mdi:gesture-tap-button",
  resourceUrl: "/hacsfiles/button-card/button-card.js",
  installed: () => !!customElements.get("button-card"),
  defaults: {
    type: "custom:button-card",
    show_name: true,
    show_icon: true,
    show_state: false,
    layout: "vertical",
  },
  yamlOrder: ["name", "icon", "color", "layout", "show_name", "show_icon", "show_state"],
  form: () => [
    entitySelector("entity", "Entity"),
    textSelector("name", "Name"),
    iconSelector("icon", "Icon"),
    textSelector("color", "Color (CSS / auto)"),
    selectSelector("layout", "Layout", LAYOUT_OPTIONS),
    booleanSelector("show_name", "Show name", true),
    booleanSelector("show_icon", "Show icon", true),
    booleanSelector("show_state", "Show state", false),
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
