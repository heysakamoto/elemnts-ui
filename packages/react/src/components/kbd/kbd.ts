import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { kbdRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(kbdRecipe);

export const KbdRoot = withProvider(ark.div, "root", {
	dataAttr: true,
	defaultProps: {
		role: "group",
		"data-scope": "kbd",
		"data-part": "root",
	},
});
KbdRoot.displayName = "KbdRoot";

export const KbdItem = withContext(ark.div, "item", {
	defaultProps: {
		"data-scope": "kbd",
		"data-part": "item",
	},
});
KbdItem.displayName = "KbdItem";
