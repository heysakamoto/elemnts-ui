import { defineSlotRecipe } from "@pandacss/dev";

import { collapsibleRecipe } from "./collapsible";

export const accordionRecipe = defineSlotRecipe({
	className: "accordion",
	slots: [
		"root",
		"item",
		"itemTrigger",
		"itemContent",
		"itemIndicator",
		"separator",
	],

	base: {
		root: {
			display: "flex",
			w: "{sizes.full}",
			flexDirection: "column",
			gap: "calc({spacing.4} * 0.5)",
		},
		item: {
			...collapsibleRecipe.base?.root,
		},
		itemTrigger: {
			...collapsibleRecipe.base?.trigger,
		},
		itemIndicator: {
			...collapsibleRecipe.base?.indicator,
		},
		itemContent: {
			...collapsibleRecipe.base?.content,
		},
	},
});
