import { defineRecipe } from "@pandacss/dev";

export const inputRecipe = defineRecipe({
	className: "input",
	base: {
		"--input-px": "calc(var(--input-size) * 0.325)",

		w: "{sizes.full}",
		px: "var(--input-px)",
		rounded: "{radii.12}",
		fontFamily: "inherit",
		alignItems: "center",
		h: "var(--input-size)",
		display: "inline-flex",
		lineHeight: "{lineHeights.none}",
		fontSize: "var(--input-font-size)",
		border: "var(--input-border, none)",
		shadow: "var(--input-shadow, none)",
		bgColor: "var(--input-bg, transparent)",
		transition: "background-color 100ms ease-in, box-shadow 100ms ease-in",

		_focusVisible: {
			outline: "none",
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
				"--input-border": "1px solid {colors.stroke.secondary}",
				_focusVisible: {
					bgColor:
						"color-mix(in oklab, var(--input-bg), 2% {colors.fg.primary})",
				},
			},
			secondary: {
				"--input-bg": "{colors.bg.secondary}",
				_focusVisible: {
					bgColor:
						"color-mix(in oklab, var(--input-bg), 2% {colors.fg.primary})",
				},
			},
			tertiary: {
				"--input-bg": "{colors.bg.tertiary}",
				"--input-radius": "calc({radii.4} * 0)",
				_focusVisible: {
					bgColor: "{colors.bg.secondary}",
				},
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
