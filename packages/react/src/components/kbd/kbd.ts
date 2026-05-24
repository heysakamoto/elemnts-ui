import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { kbdRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(kbdRecipe);

export const KbdRoot = withProvider(ark.ul, "root", {
	dataAttr: true,
	defaultProps: {
		role: "group",
		"data-scope": "kbd",
		"data-part": "root",
	},
});
KbdRoot.displayName = "KbdRoot";

export const KbdItem = withContext(ark.kbd, "item", {
	defaultProps: {
		"data-scope": "kbd",
		"data-part": "item",
	},
});
KbdItem.displayName = "KbdItem";

export const KbdItemGroup = withContext(ark.li, "itemGroup", {
	defaultProps: {
		"data-scope": "kbd",
		"data-part": "itemGroup",
	},
});
KbdItemGroup.displayName = "KbdItemGroup";

export const KbdItemGroupText = withContext(ark.span, "itemGroupText", {
	defaultProps: {
		"data-scope": "kbd",
		"data-part": "itemGroupText",
	},
});
KbdItemGroupText.displayName = "KbdItemGroupText";
