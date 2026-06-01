import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
	className: "btn",
	description:
		"A versatile button with palette and variant variants using CSS variables",
	base: {
		"--btn-px": "calc(var(--btn-size) * 0.36)",

		w: "fit-content",
		fontWeight: "500",
		position: "relative",
		userSelect: "none",
		alignItems: "center",
		rounded: "{radii.12}",
		display: "inline-flex",
		px: "var(--btn-px)",
		justifyContent: "center",
		transformOrigin: "center",
		color: "var(--btn-color)",
		height: "var(--btn-size)",
		gap: "calc({spacing.4} * 1)",
		lineHeight: "{lineHeights.none}",
		fontSize: "var(--btn-font-size)",
		border: "var(--btn-border, none)",
		shadow: "var(--btn-shadow, none)",
		bgColor: "var(--btn-bg, {colors.transparent})",
		transition: `
      scale 150ms ease,
      background-color 100ms ease-in,
      color 100ms ease-in
    `,

		_active: {
			scale: "0.98",
		},

		_hover: {
			color: "var(--btn-hover-color, var(--btn-color))",
			bgColor: "color-mix(in oklab, var(--btn-bg) 96%, {colors.fg.primary})",
		},
	},

	variants: {
		size: {
			"2xs": {
				"--btn-font-size": "{fontSizes.12}",
				"--btn-size": "calc({sizes.4} * 5)",
			},
			xs: {
				"--btn-font-size": "{fontSizes.12}",
				"--btn-size": "calc({sizes.4} * 6)",
			},
			sm: {
				"--btn-font-size": "{fontSizes.14}",
				"--btn-size": "calc({sizes.4} * 7)",
			},
			md: {
				"--btn-font-size": "{fontSizes.14}",
				"--btn-size": "calc({sizes.4} * 8)",
			},
			lg: {
				"--btn-font-size": "{fontSizes.14}",
				"--btn-size": "calc({sizes.4} * 9)",
			},
			xl: {
				"--btn-font-size": "{fontSizes.16}",
				"--btn-size": "calc({sizes.4} * 10)",
			},
		},

		variant: {
			primary: {
				"--btn-bg": "{colors.colorPalette.primary}",
				"--btn-color": "{colors.colorPalette.tertiary}",
			},
			secondary: {
				"--btn-bg": "{colors.colorPalette.secondary}",
				"--btn-color": "{colors.colorPalette.primary}",
			},
			tertiary: {
				"--btn-shadow": "{shadows.2}",
				"--btn-bg": "{colors.transparent}",
				"--btn-color": "{colors.colorPalette.primary}",
				"--btn-border": "1px solid {colors.stroke.secondary}",
			},
			surface: {
				"--btn-bg": "{colors.bg.secondary}",
				"--btn-color": "{colors.colorPalette.primary}",
			},
			ghost: {
				"--btn-bg": "{colors.transparent}",
				"--btn-color": "{colors.colorPalette.primary}",
			},
			plain: {
				"--btn-color": "{colors.colorPalette.primary}",
				"--btn-hover-color":
					"color-mix(in oklab, {colors.colorPalette.primary}, 4% {colors.fg.primary})",
			},
		},

		fullWidth: {
			true: {
				flexShrink: 1,
				w: "{sizes.full}",
			},
		},

		onHidden: {
			hide: {
				_hidden: {
					display: "none",
				},
			},
			disable: {
				_hidden: {
					opacity: "0.5",
					cursor: "not-allowed",
					pointerEvents: "none",
				},
			},
		},

		iconOnly: {
			true: {
				boxSize: "var(--btn-size)",
				"--btn-px": "calc({spacing.4} * 0)",
			},
		},
	},

	defaultVariants: {
		size: "md",
		iconOnly: false,
		fullWidth: false,
		variant: "primary",
	},
});
