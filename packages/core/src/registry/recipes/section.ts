import { defineRecipe } from "@pandacss/dev";

export const sectionRecipe = defineRecipe({
	className: "section",
	base: {
		w: "{sizes.full}",
	},
	variants: {},
	defaultVariants: {
		screen: "fit",
	},
});
