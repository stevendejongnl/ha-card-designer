import type { CardSchema } from "../core/schema";
import {
  entitySelector,
  textSelector,
  iconSelector,
  selectSelector,
  actionSelector,
} from "../core/selectors";

const BUTTON_TYPE_OPTIONS = [
  { value: "button", label: "Button" },
  { value: "switch", label: "Switch" },
];

export const bubbleCard: CardSchema = {
  id: "bubble",
  type: "custom:bubble-card",
  label: "Bubble Card",
  category: "custom",
  description: "Beautiful bubble-style card supporting multiple layout types.",
  icon: "mdi:circle",
  resourceUrl: "/hacsfiles/Bubble-Card/bubble-card.js",
  installed: () => !!customElements.get("bubble-card"),
  defaults: {
    type: "custom:bubble-card",
    card_type: "button",
  },
  yamlOrder: ["card_type", "entity", "name", "icon"],
  form: (_data) => [
    selectSelector(
      "card_type",
      "Card type",
      [
        { value: "button", label: "Button" },
        { value: "cover", label: "Cover" },
        { value: "media-player", label: "Media Player" },
        { value: "separator", label: "Separator" },
        { value: "pop-up", label: "Pop-up" },
      ],
      { required: true }
    ),
    entitySelector("entity", "Entity"),
    textSelector("name", "Name"),
    iconSelector("icon", "Icon"),
    textSelector("icon_color", "Icon color"),
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
