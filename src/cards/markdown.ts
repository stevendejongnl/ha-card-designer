import type { CardSchema } from "../core/schema";
import { textSelector, themeSelector } from "../core/selectors";

export const markdownCard: CardSchema = {
  id: "markdown",
  type: "markdown",
  label: "Markdown",
  category: "stock",
  description: "Display text with Markdown and Jinja2 templating.",
  icon: "mdi:language-markdown",
  installed: () => !!customElements.get("hui-markdown-card"),
  defaults: {
    type: "markdown",
    content: "",
  },
  yamlOrder: ["title", "content"],
  form: () => [
    textSelector("title", "Title"),
    {
      name: "content",
      label: "Content (Markdown + Jinja2)",
      selector: { text: { multiline: true } },
      required: true,
    },
    themeSelector(),
  ],
};
