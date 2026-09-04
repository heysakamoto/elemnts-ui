import { ToggleGroup } from "@ark-ui/react/toggle-group";
import { createStyleContext } from "../../styled-system/jsx";
import { toggleGroupRecipe } from "../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(toggleGroupRecipe);

export const ToggleGroupRootProvider = withProvider(
	ToggleGroup.RootProvider,
	"root",
);
ToggleGroupRootProvider.displayName = "ToggleGroupRootProvider";

export const ToggleGroupRoot = withProvider(ToggleGroup.Root, "root");
ToggleGroupRoot.displayName = "ToggleGroupRoot";

export const ToggleGroupContext = ToggleGroup.Context;

export const ToggleGroupItem = withContext(ToggleGroup.Item, "item");
ToggleGroupItem.displayName = "ToggleGroupItem";
