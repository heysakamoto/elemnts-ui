import { defineRecipe } from "@pandacss/dev";

export const gridRecipe = defineRecipe({
	className: "grid",
	base: {
		display: "grid",
		w: "{sizes.full}",
	},
	variants: {
		inline: {
			true: {
				display: "inline-grid",
			},
		},
	},
	defaultVariants: {
		inline: false,
	},
});
