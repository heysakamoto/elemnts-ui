import { ark } from "@ark-ui/react";
import { Timer } from "@ark-ui/react/timer";
import { createStyleContext } from "../../styled-system/jsx";
import { timerRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(timerRecipe);

export const TimerRootProvider = withProvider(Timer.RootProvider, "root");
TimerRootProvider.displayName = "TimerRootProvider";

export const TimerRoot = withProvider(Timer.Root, "root");
TimerRoot.displayName = "TimerRoot";

export const TimerActionTrigger = withContext(
	Timer.ActionTrigger,
	"actionTrigger",
);
TimerActionTrigger.displayName = "TimerActionTrigger";

export const TimerArea = withContext(Timer.Area, "area");
TimerArea.displayName = "TimerArea";

export const TimerContext = Timer.Context;

export const TimerControl = withContext(Timer.Control, "control");
TimerControl.displayName = "TimerControl";

export const TimerItem = withContext(Timer.Item, "item");
TimerItem.displayName = "TimerItem";

export const TimerItemLabel = withContext(ark.label, "itemLabel", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "timer",
		"data-part": "item-label",
	},
});
TimerItemLabel.displayName = "TimerItemLabel";

export const TimerItemGroup = withContext(ark.div, "itemGroup", {
	dataAttr: true,
	defaultProps: {
		"data-scope": "timer",
		"data-part": "item-group",
	},
});
TimerItemGroup.displayName = "TimerItemGroup";

export const TimerSeparator = withContext(Timer.Separator, "separator", {
	defaultProps: {
		children: ":",
	},
});
TimerSeparator.displayName = "TimerSeparator";
