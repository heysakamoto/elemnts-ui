import { defineRecipe } from "@pandacss/dev";
import { markRecipe } from "./mark";

const { base, variants, defaultVariants } = markRecipe;

export const highlightRecipe = defineRecipe({
	className: "highlight",
	base,
	variants,
	defaultVariants,
});
