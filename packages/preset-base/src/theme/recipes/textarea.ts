import { defineRecipe } from "@pandacss/dev";

export const textareaRecipe = defineRecipe({
	className: "textarea",
	base: {
		"--textarea-py": "calc(var(--textarea-size) / 5)",
		"--textarea-px": "calc(var(--textarea-size) * 0.3)",

		w: "{sizes.full}",
		border: "1px solid",
		alignItems: "start",
		fontFamily: "inherit",
		rounded: "{radii.12}",
		display: "inline-flex",
		justifyContent: "start",
		fontSize: "{fontSizes.14}",
		lineHeight: "{lineHeights.sm}",
		minH: "var(--textarea-size, auto)",
		bgColor: "var(--textarea-bg, transparent)",
		p: "var(--textarea-py) var(--textarea-px)",
		shadow: "var(--textarea-shadow), var(--focus-ring)",
		borderColor: "var(--textarea-border-color, {colors.transparent})",

		_focusVisible: {
			outlineOffset: "-1px",
			outline: "2px solid {colors.accent.primary}",
		},

		"&:is(:invalid, [data-invalid], [aria-invalid=true])": {
			outlineOffset: "-1px",
			outline: "2px solid {colors.destructive.primary}",
		},
	},
	variants: {
		size: {
			xs: {
				"--textarea-size": "calc({sizes.4} * 6)",
			},
			sm: {
				"--textarea-size": "calc({sizes.4} * 7)",
			},
			md: {
				"--textarea-size": "calc({sizes.4} * 8)",
			},
			lg: {
				"--textarea-size": "calc({sizes.4} * 9)",
			},
			xl: {
				"--textarea-size": "calc({sizes.4} * 10)",
			},
		},
		variant: {
			primary: {
				"--textarea-shadow": "{shadows.2}",
				"--textarea-bg": "{colors.bg.tertiary}",
				"--textarea-border-color": "{colors.stroke.secondary}",
			},
			secondary: {
				"--textarea-bg": "{colors.bg.secondary}",
			},
			tertiary: {
				"--textarea-bg": "{colors.transparent}",
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
