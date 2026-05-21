import { Swap } from "@ark-ui/react/swap";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { swapRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(swapRecipe);

export const SwapRootProvider = withProvider(Swap.RootProvider, "root");
SwapRootProvider.displayName = "SwapRootProvider";

export const SwapRoot = withProvider(Swap.Root, "root");
SwapRoot.displayName = "SwapRoot";

export const SwapIndicator = withContext(Swap.Indicator, "indicator");
SwapIndicator.displayName = "SwapIndicator";
