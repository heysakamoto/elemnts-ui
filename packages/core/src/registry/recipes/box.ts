import { defineRecipe } from "@pandacss/dev";

export const boxRecipe = defineRecipe({
	className: "box",
	base: {
		width: "full",
		display: "block",
	},
});
