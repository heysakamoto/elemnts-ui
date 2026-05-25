import { defineSlotRecipe } from "@pandacss/dev";

export const virtualListRecipe = defineSlotRecipe({
	className: "virtual-list",
	slots: ["root", "viewport", "container"],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
		},
		viewport: {},
		container: {},
	},
});
