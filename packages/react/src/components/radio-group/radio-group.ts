import { RadioGroup } from "@ark-ui/react/radio-group";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { radioGroupRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(radioGroupRecipe);

export const RadioGroupRootProvider = withProvider(
	RadioGroup.RootProvider,
	"root",
);
RadioGroupRootProvider.displayName = "RadioGroupRootProvider";

export const RadioGroupRoot = withProvider(RadioGroup.Root, "root");
RadioGroupRoot.displayName = "RadioGroupRoot";

export const RadioGroupContext = RadioGroup.Context;

export const RadioGroupItemContext = RadioGroup.ItemContext;

export const RadioGroupIndicator = withContext(
	RadioGroup.Indicator,
	"indicator",
);
RadioGroupIndicator.displayName = "RadioGroupIndicator";

export const RadioGroupItem = withContext(RadioGroup.Item, "item");
RadioGroupItem.displayName = "RadioGroupItem";

export const RadioGroupItemHiddenInput = RadioGroup.ItemHiddenInput;
RadioGroupItemHiddenInput.displayName = "RadioGroupItemHiddenInput";

export const RadioGroupItemText = withContext(RadioGroup.ItemText, "itemText");
RadioGroupItemText.displayName = "RadioGroupItemText";

export const RadioGroupLabel = withContext(RadioGroup.Label, "label");
RadioGroupLabel.displayName = "RadioGroupLabel";

export const RadioGroupItemControl = withContext(
	RadioGroup.ItemControl,
	"itemControl",
);
RadioGroupItemControl.displayName = "RadioGroupItemControl";
