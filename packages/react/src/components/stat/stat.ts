import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { statRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(statRecipe);

export const StatRoot = withProvider(ark.dl, "root");
StatRoot.displayName = "StatRoot";

export const StatLabel = withContext(ark.dt, "label");
StatLabel.displayName = "StatLabel";

export const StatValueText = withContext(ark.span, "valueText");
StatValueText.displayName = "StatValueText";

export const StatValueUnit = withContext(ark.span, "valueUnit");
StatValueUnit.displayName = "StatValueUnit";

export const StatHelpText = withContext(ark.span, "helpText");
StatHelpText.displayName = "StatHelpText";

export const StatIndicator = withContext(ark.span, "indicator");
StatIndicator.displayName = "StatIndicator";
