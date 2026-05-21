import { defineRecipe } from "@pandacss/dev";

export const chipRecipe = defineRecipe({
	className: "chip",
	base: {
		"--chip-px": "calc(var(--chip-size) * 0.3)",

		w: "{sizes.fit}",
		fontWeight: "500",
		gap: "{spacing.4}",
		px: "var(--chip-px)",
		alignItems: "center",
		h: "var(--chip-size)",
		colorPalette: "accent",
		display: "inline-flex",
		rounded: "{radii.full}",
		justifyContent: "center",
		bgColor: "var(--chip-bg)",
		color: "var(--chip-color)",
		lineHeight: "{lineHeights.none}",
		fontSize: "var(--chip-font-size)",
		shadow: "var(--chip-shadow, none)",
		border: "var(--chip-border, none)",
	},
	variants: {
		size: {
			xs: {
				"--chip-font-size": "{fontSizes.12}",
				"--chip-size": "calc({sizes.4} * 5)",
			},
			sm: {
				"--chip-font-size": "{fontSizes.14}",
				"--chip-size": "calc({sizes.4} * 6)",
			},
			md: {
				"--chip-font-size": "{fontSizes.14}",
				"--chip-size": "calc({sizes.4} * 7)",
			},
			lg: {
				"--chip-font-size": "{fontSizes.14}",
				"--chip-size": "calc({sizes.4} * 8)",
			},
			xl: {
				"--chip-font-size": "{fontSizes.14}",
				"--chip-size": "calc({sizes.4} * 9)",
			},
			"2xl": {
				"--chip-font-size": "{fontSizes.14}",
				"--chip-size": "calc({sizes.4} * 10)",
			},
		},

		variant: {
			primary: {
				"--chip-bg": "{colors.colorPalette.primary}",
				"--chip-color": "{colors.colorPalette.tertiary}",
			},
			secondary: {
				"--chip-color": "{colors.colorPalette.primary}",
				"--chip-bg": "{colors.colorPalette.secondary}",
			},
			tertiary: {
				"--chip-bg": "{colors.bg.tertiary}",
				"--chip-color": "{colors.colorPalette.primary}",
				"--chip-shadow": "{shadows.2}",
				"--chip-border": "1px solid {colors.stroke.tertiary}",
			},
			surface: {
				"--chip-bg": "{colors.bg.secondary}",
				"--chip-color": "{colors.colorPalette.primary}",
			},
			ghost: {
				"--chip-bg": "{colors.transparent}",
				"--chip-color": "{colors.colorPalette.primary}",
			},
		},

		iconOnly: {
			true: {
				boxSize: "var(--chip-size)",
				"--chip-px": "calc({sizes.4} * 0)",
			},
		},
	},

	defaultVariants: {
		size: "md",
		iconOnly: false,
		variant: "primary",
	},
});
