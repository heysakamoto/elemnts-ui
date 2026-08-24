import { HoverCard } from "@ark-ui/react/hover-card";

import { createStyleContext } from "../../../styled-system/jsx";
import { hoverCardRecipe } from "../../../styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(hoverCardRecipe);

export const HoverCardRootProvider = withRootProvider(HoverCard.RootProvider);
HoverCardRootProvider.displayName = "HoverCardRootProvider";

export const HoverCardRoot = withRootProvider(HoverCard.Root);
HoverCardRoot.displayName = "HoverCardRoot";

export const HoverCardArrow = withContext(HoverCard.Arrow, "arrow");
HoverCardArrow.displayName = "HoverCardArrow";

export const HoverCardArrowTip = withContext(HoverCard.ArrowTip, "arrowTip");
HoverCardArrowTip.displayName = "HoverCardArrowTip";

export const HoverCardContent = withContext(HoverCard.Content, "content");
HoverCardContent.displayName = "HoverCardContent";

export const HoverCardPositioner = withContext(
	HoverCard.Positioner,
	"positioner",
);
HoverCardPositioner.displayName = "HoverCardPositioner";

export const HoverCardTrigger = withContext(HoverCard.Trigger, "trigger");
HoverCardTrigger.displayName = "HoverCardTrigger";

export const HoverCardContext = HoverCard.Context;
