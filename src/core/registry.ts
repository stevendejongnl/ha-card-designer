import type { CardSchema } from "./schema";

import { tileCard } from "../cards/tile";
import { entitiesCard } from "../cards/entities";
import { stackVerticalCard } from "../cards/stack-vertical";
import { stackHorizontalCard } from "../cards/stack-horizontal";
import { stackGridCard } from "../cards/stack-grid";
import { buttonCard } from "../cards/button";
import { gaugeCard } from "../cards/gauge";
import { glanceCard } from "../cards/glance";
import { markdownCard } from "../cards/markdown";
import { mushroomEntityCard } from "../cards/mushroom-entity";
import { mushroomTemplateCard } from "../cards/mushroom-template";
import { mushroomChipsCard } from "../cards/mushroom-chips";
import { miniGraphCard } from "../cards/mini-graph";
import { bubbleCard } from "../cards/bubble";
import { buttonCardCustom } from "../cards/button-card";

export const ALL_CARDS: CardSchema[] = [
  // Stock
  tileCard,
  entitiesCard,
  stackVerticalCard,
  stackHorizontalCard,
  stackGridCard,
  buttonCard,
  gaugeCard,
  glanceCard,
  markdownCard,
  // Mushroom
  mushroomEntityCard,
  mushroomTemplateCard,
  mushroomChipsCard,
  // Custom
  miniGraphCard,
  bubbleCard,
  buttonCardCustom,
];

export function getCardSchema(id: string): CardSchema | undefined {
  return ALL_CARDS.find((c) => c.id === id);
}
