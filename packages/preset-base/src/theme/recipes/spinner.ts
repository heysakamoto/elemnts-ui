import { defineRecipe } from "@pandacss/dev";

export const spinnerRecipe = defineRecipe({
	className: "spinner",
	base: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "{colors.colorPalette.primary}",

		"& > svg": {
			color: "inherit",
			maxW: "max-content",
			boxSize: "{sizes.full}",
			animation: "spin linear infinite",
		},
	},
	variants: {
		speed: {
			slow: {
				"& > svg": {
					animationDuration: "2s",
				},
			},
			normal: {
				"& > svg": {
					animationDuration: "1.5s",
				},
			},
			fast: {
				"& > svg": {
					animationDuration: "1s",
				},
			},
		},

		size: {
			xs: {
				boxSize: "calc({sizes.4} * 4)",
			},
			sm: {
				boxSize: "calc({sizes.4} * 5)",
			},
			md: {
				boxSize: "calc({sizes.4} * 6)",
			},
			lg: {
				boxSize: "calc({sizes.4} * 7)",
			},
			xl: {
				boxSize: "calc({sizes.4} * 8)",
			},
			"2xl": {
				boxSize: "calc({sizes.4} * 10)",
			},
		},
	},
	defaultVariants: {
		size: "md",
		speed: "normal",
	},
});
