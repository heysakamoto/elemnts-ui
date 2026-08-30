import { defineSlotRecipe } from "@pandacss/dev";

export const kbdGroupRecipe = defineSlotRecipe({
	className: "kbd-group",
	slots: ["root", "separator"],
	base: {
		root: {
			display: "flex",
			alignItems: "center",
			gap: "calc({sizes.4} * 2)",
		},
		separator: {
			fontSize: "{fontSizes.14}",
		},
	},
});
