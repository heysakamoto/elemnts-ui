import { Collapsible } from "@ark-ui/react/collapsible";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { collapsibleRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(collapsibleRecipe);

export const CollapsibleRootProvider = withProvider(
	Collapsible.RootProvider,
	"root",
);
CollapsibleRootProvider.displayName = "CollapsibleProvider";

export const CollapsibleRoot = withProvider(Collapsible.Root, "root");
CollapsibleRoot.displayName = "CollapsibleRoot";

export const CollapsibleTrigger = withContext(Collapsible.Trigger, "trigger");
CollapsibleTrigger.displayName = "CollapsibleTrigger";

export const CollapsibleContent = withContext(Collapsible.Content, "content");
CollapsibleContent.displayName = "CollapsibleContent";

export const CollapsibleIndicator = withContext(
	Collapsible.Indicator,
	"indicator",
);
CollapsibleIndicator.displayName = "CollapsibleIndicator";

export const CollapsibleContext = Collapsible.Context;
