import { defineRecipe } from "@pandacss/dev";

export const textareaRecipe = defineRecipe({
	className: "textarea",
	base: {
		"--textarea-py": "calc(var(--textarea-size) / 5)",
		"--textarea-px": "calc(var(--textarea-size) * 0.25)",

		w: "{sizes.full}",
		border: "1px solid",
		alignItems: "start",
		fontFamily: "inherit",
		rounded: "{radii.12}",
		display: "inline-flex",
		justifyContent: "start",
		lineHeight: "{lineHeights.sm}",
		minH: "var(--textarea-size, auto)",
		fontSize: "var(--textarea-font-size)",
		bgColor: "var(--textarea-bg, transparent)",
		p: "var(--textarea-py) var(--textarea-px)",
		shadow: "var(--textarea-shadow), var(--focus-ring)",
		borderColor: "var(--textarea-border-color, {colors.transparent})",

		_focusVisible: {
			outlineOffset: "-1px",
			outline: "2px solid {colors.accent.primary}",
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
			},
			secondary: {
				"--textarea-bg": "{colors.bg.secondary}",
			},
			tertiary: {
				"--textarea-bg": "{colors.transparent}",
				"--textarea-radius": "calc({radii.4} * 0)",
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
