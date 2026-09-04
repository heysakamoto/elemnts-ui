import { Checkbox } from "@ark-ui/react/checkbox";
import { createStyleContext } from "../../styled-system/jsx";
import { checkboxRecipe } from "../../styled-system/recipes";
import { Icon } from "../icon";

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

export const CheckboxIndicator = withContext(Checkbox.Indicator, "indicator", {
	defaultProps: {
		children: (
			<Icon
				icon="tabler-check"
				width={12}
				height={12}
			/>
		),
	},
});
CheckboxIndicator.displayName = "CheckboxIndicator";

export const CheckboxHiddenInput = Checkbox.HiddenInput;
CheckboxHiddenInput.displayName = "CheckboxHiddenInput";

export const CheckboxContext = Checkbox.Context;
