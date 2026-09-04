import { defineRecipe } from "@pandacss/dev";

export const spinnerRecipe = defineRecipe({
	className: "spinner",
	base: {
		display: "flex",
		color: "inherit",
		alignItems: "center",
		justifyContent: "center",

		"& > svg": {
			color: "inherit",
			maxW: "max-content",
			animationName: "spin",
			boxSize: "{sizes.full}",
			animationTimingFunction: "linear",
			animationIterationCount: "infinite",
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
