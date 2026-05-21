import { defineRecipe } from "@pandacss/dev";

export const stackRecipe = defineRecipe({
	className: "stack",
	base: {
		display: "flex",
	},
	variants: {
		inline: {
			true: { display: "inline-flex" },
		},
	},
	defaultVariants: {
		inline: false,
	},
});
