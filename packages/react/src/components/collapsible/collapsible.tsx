import { Collapsible } from "@ark-ui/react/collapsible";
import { Icon } from "@iconify/react";

import { createStyleContext } from "../../../styled-system/jsx";
import { collapsibleRecipe } from "../../../styled-system/recipes";

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
	{
		defaultProps: {
			children: (
				<Icon
					icon="tabler:chevron-down"
					width={16}
					height={16}
				/>
			),
		},
	},
);
CollapsibleIndicator.displayName = "CollapsibleIndicator";

export const CollapsibleContext = Collapsible.Context;
