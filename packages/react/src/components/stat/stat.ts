import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { statRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(statRecipe);

export const StatRoot = withProvider(ark.dl, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "stat",
	},
});
StatRoot.displayName = "StatRoot";

export const StatLabel = withContext(ark.dt, "label", {
	dataAttr: true,
	defaultProps: {
		"data-part": "label",
		"data-scope": "stat",
	},
});
StatLabel.displayName = "StatLabel";

export const StatValueText = withContext(ark.span, "valueText", {
	dataAttr: true,
	defaultProps: {
		"data-part": "value-text",
		"data-scope": "stat",
	},
});
StatValueText.displayName = "StatValueText";

export const StatValueUnit = withContext(ark.span, "valueUnit", {
	dataAttr: true,
	defaultProps: {
		"data-part": "value-unit",
		"data-scope": "stat",
	},
});
StatValueUnit.displayName = "StatValueUnit";

export const StatHelpText = withContext(ark.span, "helpText", {
	dataAttr: true,
	defaultProps: {
		"data-part": "help-text",
		"data-scope": "stat",
	},
});
StatHelpText.displayName = "StatHelpText";

export const StatIndicator = withContext(ark.span, "indicator", {
	dataAttr: true,
	defaultProps: {
		"data-part": "indicator",
		"data-scope": "stat",
	},
});
StatIndicator.displayName = "StatIndicator";
