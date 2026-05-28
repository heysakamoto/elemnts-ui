import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { listRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(listRecipe);

export const ListRoot = withProvider(ark.ul, "root", {
	dataAttr: true,
	defaultProps: {
		role: "list",
		"data-part": "root",
		"data-scope": "list",
	},
});
ListRoot.displayName = "ListRoot";

export const ListItem = withContext(ark.li, "item", {
	dataAttr: true,
	defaultProps: {
		role: "listitem",
		"data-part": "item",
		"data-scope": "list",
	},
});
ListItem.displayName = "ListItem";

export const ListIndicator = withContext(ark.span, "indicator", {
	dataAttr: true,
	defaultProps: {
		role: "presentation",
		"data-part": "indicator",
		"data-scope": "list",
	},
});
ListIndicator.displayName = "ListIndicator";
