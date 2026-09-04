import { Tooltip } from "@ark-ui/react/tooltip";
import { createStyleContext } from "../../styled-system/jsx";
import { tooltipRecipe } from "../../styled-system/recipes";

const { withRootProvider, withContext } = createStyleContext(tooltipRecipe);

export const TooltipRootProvider = withRootProvider(Tooltip.RootProvider);
TooltipRootProvider.displayName = "TooltipRootProvider";

export const TooltipRoot = withRootProvider(Tooltip.Root);
TooltipRoot.displayName = "TooltipRoot";

export const TooltipArrow = withContext(Tooltip.Arrow, "arrow");
TooltipArrow.displayName = "TooltipArrow";

export const TooltipArrowTip = withContext(Tooltip.ArrowTip, "arrowTip");
TooltipArrowTip.displayName = "TooltipArrowTip";

export const TooltipContent = withContext(Tooltip.Content, "content");
TooltipContent.displayName = "TooltipContent";

export const TooltipContext = Tooltip.Context;

export const TooltipPositioner = withContext(Tooltip.Positioner, "positioner");
TooltipPositioner.displayName = "TooltipPositioner";

export const TooltipTrigger = withContext(Tooltip.Trigger, "trigger");
TooltipTrigger.displayName = "TooltipTrigger";
