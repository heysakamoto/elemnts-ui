import { defineRecipe } from "@pandacss/dev";

export const containerRecipe = defineRecipe({
	className: "container",
	base: {
		w: "{sizes.full}",
		mx: "{spacing.auto}",
	},
	variants: {
		fluid: {
			true: {
				maxW: "{sizes.full}",
			},
		},
	},
	defaultVariants: {
		fluid: false,
	},
});
