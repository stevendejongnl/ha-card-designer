import type { CardSchema } from "../core/schema";

export const mushroomChipsCard: CardSchema = {
  id: "mushroom-chips",
  type: "custom:mushroom-chips-card",
  label: "Mushroom · Chips",
  category: "mushroom",
  description: "A compact row of chip elements (entity, weather, action, menu, …).",
  icon: "mdi:pokeball",
  resourceUrl: "/hacsfiles/lovelace-mushroom/mushroom.js",
  installed: () => !!customElements.get("mushroom-chips-card"),
  defaults: {
    type: "custom:mushroom-chips-card",
    chips: [],
  },
  yamlOrder: ["chips", "alignment"],
  form: () => [
    {
      name: "alignment",
      label: "Alignment",
      selector: {
        select: {
          options: [
            { value: "start", label: "Start" },
            { value: "center", label: "Center" },
            { value: "end", label: "End" },
          ],
        },
      },
    },
  ],
};
