import { Toggle } from "@ark-ui/react/toggle";
import { createStyleContext } from "../../styled-system/jsx";
import { toggleRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(toggleRecipe);

export const ToggleRoot = withProvider(Toggle.Root, "root");
ToggleRoot.displayName = "ToggleRoot";
export const ToggleContext = Toggle.Context;

export const ToggleIndicator = withContext(Toggle.Indicator, "indicator");
ToggleIndicator.displayName = "ToggleIndicator";
