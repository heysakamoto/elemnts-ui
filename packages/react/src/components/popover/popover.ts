import { Popover } from "@ark-ui/react/popover";

import { createStyleContext } from "../../../styled-system/jsx";
import { popoverRecipe } from "../../../styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(popoverRecipe);

export const PopoverRootProvider = withRootProvider(Popover.RootProvider);
PopoverRootProvider.displayName = "PopoverRootProvider";

export const PopoverRoot = withRootProvider(Popover.Root);
PopoverRoot.displayName = "PopoverRoot";

export const PopoverAnchor = withContext(Popover.Anchor, "anchor");
PopoverAnchor.displayName = "PopoverAnchor";

export const PopoverArrow = withContext(Popover.Arrow, "arrow");
PopoverArrow.displayName = "PopoverArrow";

export const PopoverArrowTip = withContext(Popover.ArrowTip, "arrowTip");
PopoverArrowTip.displayName = "PopoverArrowTip";

export const PopoverCloseTrigger = withContext(
	Popover.CloseTrigger,
	"closeTrigger",
);
PopoverCloseTrigger.displayName = "PopoverCloseTrigger";

export const PopoverContent = withContext(Popover.Content, "content");
PopoverContent.displayName = "PopoverContent";

export const PopoverContext = Popover.Context;

export const PopoverDescription = withContext(
	Popover.Description,
	"description",
);
PopoverDescription.displayName = "PopoverDescription";

export const PopoverPositioner = withContext(Popover.Positioner, "positioner");
PopoverPositioner.displayName = "PopoverPositioner";

export const PopoverTitle = withContext(Popover.Title, "title");
PopoverTitle.displayName = "PopoverTitle";

export const PopoverTrigger = withContext(Popover.Trigger, "trigger");
PopoverTrigger.displayName = "PopoverTrigger";

export const PopoverIndicator = withContext(Popover.Indicator, "indicator");
PopoverIndicator.displayName = "PopoverIndicator";
