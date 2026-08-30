import { defineRecipe } from "@pandacss/dev";

export const imageRecipe = defineRecipe({
	className: "img",
	base: {
		objectFit: "cover",
		cornerShape: "squircle",
	},
});
