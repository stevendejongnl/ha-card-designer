import type { CardSchema } from "../core/schema";
import {
  entitySelector,
  textSelector,
  iconSelector,
  booleanSelector,
  selectSelector,
  themeSelector,
  actionSelector,
} from "../core/selectors";

const LAYOUT_OPTIONS = [
  { value: "default", label: "Default" },
  { value: "vertical", label: "Vertical" },
  { value: "horizontal", label: "Horizontal" },
];

export const mushroomEntityCard: CardSchema = {
  id: "mushroom-entity",
  type: "custom:mushroom-entity-card",
  label: "Mushroom · Entity",
  category: "mushroom",
  description: "Versatile entity card from the Mushroom custom card suite.",
  icon: "mdi:mushroom",
  resourceUrl: "/hacsfiles/lovelace-mushroom/mushroom.js",
  installed: () => !!customElements.get("mushroom-entity-card"),
  defaults: {
    type: "custom:mushroom-entity-card",
  },
  yamlOrder: ["name", "icon", "icon_color", "layout", "fill_container"],
  form: () => [
    entitySelector("entity", "Entity", { required: true }),
    textSelector("name", "Name"),
    iconSelector("icon", "Icon"),
    textSelector("icon_color", "Icon color"),
    selectSelector("layout", "Layout", LAYOUT_OPTIONS),
    booleanSelector("fill_container", "Fill container", false),
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
        actionSelector("double_tap_action", "Double tap action"),
      ],
    },
  ],
};
