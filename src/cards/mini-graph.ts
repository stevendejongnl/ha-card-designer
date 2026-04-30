import type { CardSchema } from "../core/schema";
import {
  entitySelector,
  textSelector,
  numberSelector,
  booleanSelector,
  selectSelector,
} from "../core/selectors";

const LINE_COLOR_OPTIONS = [
  { value: "var(--accent-color)", label: "Accent" },
  { value: "var(--primary-color)", label: "Primary" },
  { value: "#e74c3c", label: "Red" },
  { value: "#2ecc71", label: "Green" },
  { value: "#3498db", label: "Blue" },
];

const GRAPH_TYPE_OPTIONS = [
  { value: "line", label: "Line" },
  { value: "bar", label: "Bar" },
];

export const miniGraphCard: CardSchema = {
  id: "mini-graph",
  type: "custom:mini-graph-card",
  label: "Mini Graph Card",
  category: "custom",
  description: "Sensor history as a line or bar graph with optional statistics.",
  icon: "mdi:chart-line",
  resourceUrl: "/hacsfiles/mini-graph-card/mini-graph-card-bundle.js",
  installed: () => !!customElements.get("mini-graph-card"),
  defaults: {
    type: "custom:mini-graph-card",
    hours_to_show: 24,
    points_per_hour: 0.5,
    line_width: 5,
    font_size: 75,
    animate: false,
    show: {
      fill: true,
      icon: true,
      name: true,
      state: true,
      legend: true,
    },
  },
  yamlOrder: ["name", "icon", "unit", "entities", "hours_to_show", "graph_type"],
  form: (_data) => [
    entitySelector("entities", "Entity", { required: true }),
    textSelector("name", "Name"),
    textSelector("unit", "Unit"),
    selectSelector("graph_type", "Graph type", GRAPH_TYPE_OPTIONS),
    numberSelector("hours_to_show", "Hours to show", { min: 1, max: 168, mode: "box" }),
    numberSelector("points_per_hour", "Points per hour", { min: 0.1, max: 10, step: 0.5, mode: "box" }),
    numberSelector("line_width", "Line width", { min: 1, max: 10, mode: "slider" }),
    selectSelector("color", "Line color", LINE_COLOR_OPTIONS),
    booleanSelector("animate", "Animate on load", false),
    {
      type: "expandable",
      title: "Show / hide elements",
      icon: "mdi:eye",
      name: "_show",
      schema: [
        booleanSelector("show_fill", "Fill area", true),
        booleanSelector("show_icon", "Icon", true),
        booleanSelector("show_name", "Name", true),
        booleanSelector("show_state", "State", true),
        booleanSelector("show_legend", "Legend", true),
      ],
    },
  ],
};
