import { defineRecipe } from "@pandacss/dev";

export const chipRecipe = defineRecipe({
	className: "chip",
	base: {
		"--px": "calc(var(--size) * 0.3)",

		px: "var(--px)",
		w: "{sizes.fit}",
		h: "var(--size)",
		fontWeight: "500",
		gap: "{spacing.4}",
		border: "1px solid",
		alignItems: "center",
		bgColor: "var(--bg)",
		color: "var(--color)",
		display: "inline-flex",
		rounded: "{radii.full}",
		justifyContent: "center",
		fontSize: "var(--font-size)",
		shadow: "var(--shadow, none)",
		lineHeight: "{lineHeights.none}",
		borderColor: "var(--border-color, {colors.transparent})",

		_focusVisible: {
			outlineOffset: "-1px",
			outline: "2px solid {colors.accent.primary}",
		},
	},
	variants: {
		size: {
			xs: {
				"--font-size": "{fontSizes.12}",
				"--size": "calc({sizes.4} * 5)",
			},
			sm: {
				"--font-size": "{fontSizes.14}",
				"--size": "calc({sizes.4} * 6)",
			},
			md: {
				"--font-size": "{fontSizes.14}",
				"--size": "calc({sizes.4} * 7)",
			},
			lg: {
				"--font-size": "{fontSizes.14}",
				"--size": "calc({sizes.4} * 8)",
			},
			xl: {
				"--font-size": "{fontSizes.14}",
				"--size": "calc({sizes.4} * 9)",
			},
			"2xl": {
				"--font-size": "{fontSizes.14}",
				"--size": "calc({sizes.4} * 10)",
			},
		},

		variant: {
			primary: {
				"--bg": "{colors.colorPalette.primary}",
				"--color": "{colors.colorPalette.tertiary}",
			},
			secondary: {
				"--color": "{colors.colorPalette.primary}",
				"--bg": "{colors.colorPalette.secondary}",
			},
			tertiary: {
				"--shadow": "{shadows.2}",
				"--bg": "{colors.bg.tertiary}",
				"--color": "{colors.colorPalette.primary}",
				"--border-color": "{colors.stroke.secondary}",
			},
			surface: {
				"--bg": "{colors.bg.secondary}",
				"--color": "{colors.colorPalette.primary}",
			},
			ghost: {
				"--bg": "{colors.transparent}",
				"--color": "{colors.colorPalette.primary}",
			},
		},

		iconOnly: {
			true: {
				boxSize: "var(--size)",
				"--px": "calc({sizes.4} * 0)",
			},
		},
	},

	defaultVariants: {
		size: "md",
		iconOnly: false,
		variant: "primary",
	},
});
