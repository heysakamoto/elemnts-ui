import { Checkbox } from "@ark-ui/react/checkbox";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { checkboxRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(checkboxRecipe);

export const CheckboxRootProvider = withProvider(Checkbox.RootProvider, "root");
CheckboxRootProvider.displayName = "CheckboxProvider";

export const CheckboxGroupProvider = withProvider(
	Checkbox.GroupProvider,
	"root",
);
CheckboxGroupProvider.displayName = "CheckboxGroupProvider";

export const CheckboxGroup = withProvider(Checkbox.Group, "group");
CheckboxGroup.displayName = "CheckboxGroup";

export const CheckboxRoot = withProvider(Checkbox.Root, "root");
CheckboxRoot.displayName = "CheckboxRoot";

export const CheckboxLabel = withContext(Checkbox.Label, "label");
CheckboxLabel.displayName = "CheckboxLabel";

export const CheckboxControl = withContext(Checkbox.Control, "control");
CheckboxControl.displayName = "CheckboxControl";

export const CheckboxIndicator = withContext(Checkbox.Indicator, "indicator");
CheckboxIndicator.displayName = "CheckboxIndicator";

export const CheckboxHiddenInput = Checkbox.HiddenInput;
CheckboxHiddenInput.displayName = "CheckboxHiddenInput";

export const CheckboxContext = Checkbox.Context;
