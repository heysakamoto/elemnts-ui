import { defineRecipe } from "@pandacss/dev";
import { size } from "../constants/size";

export const swatchRecipe = defineRecipe({
	className: "color-swatch",

	base: {
		position: "relative",
		alignItems: "center",
		aspectRatio: "1 / 1",
		rounded: "{radii.full}",
		display: "inline-flex",
		justifyContent: "center",
		border: "1px solid {colors.stroke.secondary}",
	},

	variants: {
		size: {
			"2xs": {
				height: size["2xs"].height,
			},
			xs: {
				height: size.xs.height,
			},
			sm: {
				height: size.sm.height,
			},
			md: {
				height: size.md.height,
			},
			lg: {
				height: size.lg.height,
			},
			xl: {
				height: size.xl.height,
			},
		},
	},
	defaultVariants: {
		size: "md",
	},
});
