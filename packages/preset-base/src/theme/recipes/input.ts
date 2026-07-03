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
		fontSize: "{fontSizes.14}",
		lineHeight: "{lineHeights.none}",
		shadow: "var(--input-shadow, none)",
		bgColor: "var(--input-bg, transparent)",
		borderColor: "var(--input-border-color, {colors.transparent})",

		_focusVisible: {
			outlineOffset: "-1px",
			outline: "2px solid {colors.accent.primary}",
		},

		"&:is(:invalid, [data-invalid], [aria-invalid=true])": {
			outlineOffset: "-1px",
			outline: "2px solid {colors.destructive.primary}",
		},

		_disabled: {
			filter: "grayscale(50%)",
		},
	},
	variants: {
		size: {
			xs: {
				"--input-size": "calc({sizes.4} * 6)",
			},
			sm: {
				"--input-size": "calc({sizes.4} * 7)",
			},
			md: {
				"--input-size": "calc({sizes.4} * 8)",
			},
			lg: {
				"--input-size": "calc({sizes.4} * 9)",
			},
			xl: {
				"--input-size": "calc({sizes.4} * 10)",
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
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
