import type { CardSchema } from "../core/schema";
import { textSelector, themeSelector } from "../core/selectors";
import { entityRowList } from "../core/widgets";

export const entitiesCard: CardSchema = {
  id: "entities",
  type: "entities",
  label: "Entities",
  category: "stock",
  description: "A list of entity rows. Add entities by ID in the entities list.",
  icon: "mdi:format-list-bulleted",
  installed: () => !!customElements.get("hui-entities-card"),
  defaults: {
    type: "entities",
    entities: [],
    show_header_toggle: false,
  },
  yamlOrder: ["entities", "title", "icon", "show_header_toggle"],
  form: () => [
    entityRowList(),
    textSelector("title", "Title"),
    themeSelector(),
    {
      type: "expandable",
      title: "Options",
      icon: "mdi:cog",
      name: "_options",
      schema: [
        {
          name: "show_header_toggle",
          label: "Show header toggle",
          selector: { boolean: {} },
          default: false,
        },
      ],
    },
  ],
};
