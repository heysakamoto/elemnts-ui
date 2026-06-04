import { defineRecipe } from "@pandacss/dev";

export const textareaRecipe = defineRecipe({
	className: "textarea",
	base: {
		"--textarea-py": "calc(var(--textarea-size) / 5)",
		"--textarea-px": "calc(var(--textarea-size) * 0.25)",

		w: "{sizes.full}",
		alignItems: "start",
		fontFamily: "inherit",
		display: "inline-flex",
		justifyContent: "start",
		rounded: "{radii.12}",
		lineHeight: "{lineHeights.sm}",
		minH: "var(--textarea-size, auto)",
		fontSize: "var(--textarea-font-size)",
		shadow: "var(--textarea-shadow, none)",
		border: "var(--textarea-border, none)",
		bgColor: "var(--textarea-bg, transparent)",
		p: "var(--textarea-py) var(--textarea-px)",

		_focusVisible: {
			outline: "none",
		},
	},
	variants: {
		size: {
			xs: {
				"--textarea-size": "calc({sizes.4} * 7)",
				"--textarea-font-size": "{fontSizes.14}",
			},
			sm: {
				"--textarea-size": "calc({sizes.4} * 8)",
				"--textarea-font-size": "{fontSizes.14}",
			},
			md: {
				"--textarea-size": "calc({sizes.4} * 9)",
				"--textarea-font-size": "{fontSizes.14}",
			},
			lg: {
				"--textarea-size": "calc({sizes.4} * 10)",
				"--textarea-font-size": "{fontSizes.14}",
			},
			xl: {
				"--textarea-font-size": "{fontSizes.14}",
				"--textarea-size": "calc({sizes.4} * 12)",
			},
		},
		variant: {
			primary: {
				"--textarea-shadow": "{shadows.2}",
				"--textarea-bg": "{colors.bg.tertiary}",
				"--textarea-border": "1px solid {colors.stroke.secondary}",
				_focusVisible: {
					bgColor:
						"color-mix(in oklab, var(--input-bg), 2% {colors.fg.primary})",
				},
			},
			secondary: {
				"--textarea-bg": "{colors.bg.secondary}",
				_focusVisible: {
					bgColor:
						"color-mix(in oklab, var(--input-bg), 2% {colors.fg.primary})",
				},
			},
			tertiary: {
				"--textarea-bg": "{colors.transparent}",
				"--textarea-radius": "calc({radii.4} * 0)",
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
