import { defineSlotRecipe } from "@pandacss/dev";

export const virtualListRecipe = defineSlotRecipe({
	className: "virtual-list",
	slots: ["root", "viewport", "content", "item"],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
		},
		viewport: {},
		content: {},
		item: {},
	},
});
