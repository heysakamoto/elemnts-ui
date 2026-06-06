import { defineRecipe } from "@pandacss/dev";

export const inputRecipe = defineRecipe({
	className: "input",
	base: {
		"--input-px": "calc(var(--input-size) * 0.325)",

		w: "{sizes.full}",
		border: "1px solid",
		alignItems: "center",
		px: "var(--input-px)",
		rounded: "{radii.12}",
		fontFamily: "inherit",
		h: "var(--input-size)",
		display: "inline-flex",
		lineHeight: "{lineHeights.none}",
		fontSize: "var(--input-font-size)",
		bgColor: "var(--input-bg, transparent)",
		shadow: "var(--input-shadow), var(--focus-ring)",
		borderColor: "var(--input-border-color, {colors.transparent})",

		_focusVisible: {
			outlineOffset: "-1px",
			outline: "2px solid {colors.accent.primary}",
		},
	},
	variants: {
		size: {
			xs: {
				"--input-size": "calc({sizes.4} * 6)",
				"--input-font-size": "{fontSizes.14}",
			},
			sm: {
				"--input-size": "calc({sizes.4} * 7)",
				"--input-font-size": "{fontSizes.14}",
			},
			md: {
				"--input-size": "calc({sizes.4} * 8)",
				"--input-font-size": "{fontSizes.14}",
			},
			lg: {
				"--input-size": "calc({sizes.4} * 9)",
				"--input-font-size": "{fontSizes.14}",
			},
			xl: {
				"--input-size": "calc({sizes.4} * 10)",
				"--input-font-size": "{fontSizes.14}",
			},
		},
		variant: {
			primary: {
				"--input-shadow": "{shadows.2}",
				"--input-bg": "{colors.bg.tertiary}",
				"--input-border-color": "{colors.stroke.secondary}",
			},
			secondary: {
				"--input-bg": "{colors.bg.secondary}",
			},
			tertiary: {
				"--input-bg": "{colors.bg.tertiary}",
				"--input-radius": "calc({radii.4} * 0)",
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
