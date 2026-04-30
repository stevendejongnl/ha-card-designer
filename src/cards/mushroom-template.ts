import type { CardSchema } from "../core/schema";
import {
  textSelector,
  iconSelector,
  booleanSelector,
  selectSelector,
  themeSelector,
  actionSelector,
  templateSelector,
} from "../core/selectors";

const LAYOUT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "vertical", label: "Vertical" },
  { value: "horizontal", label: "Horizontal" },
];

export const mushroomTemplateCard: CardSchema = {
  id: "mushroom-template",
  type: "custom:mushroom-template-card",
  label: "Mushroom · Template",
  category: "mushroom",
  description: "Fully customizable Mushroom card driven by Jinja2 templates.",
  icon: "mdi:mushroom-outline",
  resourceUrl: "/hacsfiles/lovelace-mushroom/mushroom.js",
  installed: () => !!customElements.get("mushroom-template-card"),
  defaults: {
    type: "custom:mushroom-template-card",
  },
  yamlOrder: ["primary", "secondary", "icon", "icon_color", "layout"],
  form: () => [
    templateSelector("primary", "Primary (template)"),
    templateSelector("secondary", "Secondary (template)"),
    iconSelector("icon", "Icon"),
    templateSelector("icon_color", "Icon color (template)"),
    selectSelector("layout", "Layout", LAYOUT_OPTIONS),
    booleanSelector("fill_container", "Fill container", false),
    {
      type: "expandable",
      title: "Badge",
      icon: "mdi:badge-account",
      name: "_badge",
      schema: [
        iconSelector("badge_icon", "Badge icon"),
        textSelector("badge_color", "Badge color"),
      ],
    },
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
