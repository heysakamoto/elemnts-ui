import { defineRecipe } from "@pandacss/dev";
import { chipRecipe } from "./chip";

const { variants, defaultVariants } = chipRecipe;

export const codeRecipe = defineRecipe({
	className: "code",
	base: {
		fontFamily: "mono",
		alignItems: "center",
		display: "inline-flex",
		rounded: "calc({radii.4} * 3)",
	},
	variants,
	defaultVariants,
});
