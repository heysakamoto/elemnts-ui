import { defineRecipe } from "@pandacss/dev";

export const swatchRecipe = defineRecipe({
	className: "color-swatch",

	base: {
		position: "relative",
		alignItems: "center",
		display: "inline-flex",
		rounded: "{radii.full}",
		justifyContent: "center",
		shadow: "{shadows.2}",
		boxSize: "var(--swatch-size)",
	},

	variants: {
		size: {
			xs: {
				"--swatch-size": "calc({sizes.4} * 6)",
			},
			sm: {
				"--swatch-size": "calc({sizes.4} * 7)",
			},
			md: {
				"--swatch-size": "calc({sizes.4} * 8)",
			},
			lg: {
				"--swatch-size": "calc({sizes.4} * 9)",
			},
			xl: {
				"--swatch-size": "calc({sizes.4} * 10)",
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});
