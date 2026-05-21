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

		_focus: { shadow: "0 0 0 2px {colors.accent.primary}" },
		_invalid: { shadow: "0 0 0 2px {colors.destructive.primary}" },
		_disabled: { opacity: 0.5, cursor: "not-allowed !important" },
		_placeholder: { color: "{colors.fg.tertiary}", opacity: 0.8 },
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
				"--textarea-bg": "{colors.bg.tertiary}",
				"--textarea-shadow": "{shadows.2}",
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
