import { defineRecipe } from "@pandacss/dev";
import { chipRecipe } from "./chip";

const { base, variants, defaultVariants } = chipRecipe;

export const codeRecipe = defineRecipe({
	className: "code",
	base: {
		fontFamily: "mono",
		justifyContent: "start",
		rounded: "calc({radii.4} * 3)",
		...base,
	},
	variants,
	defaultVariants,
});
