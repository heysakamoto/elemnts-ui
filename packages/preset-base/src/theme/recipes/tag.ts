import { defineRecipe } from "@pandacss/dev";

export const tagRecipe = defineRecipe({
	className: "tag",
	base: {
		cursor: "pointer",
		position: "relative",
		alignItems: "center",
		h: "var(--tag-size)",
		rounded: "{radii.12}",
		display: "inline-flex",
		justifyContent: "center",
		bgColor: "var(--tag-bg)",
		fontSize: "{fontSizes.14}",
		color: "{colors.fg.primary}",
		shadow: "var(--tag-shadow)",
		gap: "calc({spacing.4} * 1)",
		lineHeight: "{lineHeights.none}",
		border: "var(--tag-border, none)",
		px: "calc(var(--tag-size, 0) * 0.3)",
		transition: `
      background-color 100ms ease,
      color 100ms ease
    `,

		_hover: {
			color: "var(--tag-color-selected)",
			bg: "color-mix(in oklab, var(--tag-bg-selected), 10% {colors.transparent})",
		},

		_selected: {
			bgColor: "var(--tag-bg-selected)",
			color: "var(--tag-color-selected)",
			_hover: {
				bgColor: "var(--tag-bg-selected)",
			},
		},

		_disabled: {
			opacity: "0.5",
			cursor: "not-allowed",
			pointerEvents: "none",
		},
	},

	variants: {
		size: {
			xs: {
				"--tag-size": "calc({sizes.4} * 5)",
			},
			sm: {
				"--tag-size": "calc({sizes.4} * 6)",
			},
			md: {
				"--tag-size": "calc({sizes.4} * 7)",
			},
			lg: {
				"--tag-size": "calc({sizes.4} * 8)",
			},
			xl: {
				"--tag-size": "calc({sizes.4} * 10)",
			},
		},

		tone: {
			primary: {
				"--tag-bg": "{colors.transparent}",
				"--tag-shadow": "{shadows.2}",
				"--tag-border": "1px solid {colors.stroke.tertiary}",
			},
			secondary: {
				"--tag-bg": "{colors.bg.secondary}",
			},
			tertiary: {
				"--tag-bg": "{colors.transparent}",
			},
		},

		variant: {
			primary: {
				"--tag-bg-selected": "{colors.colorPalette.primary}",
				"--tag-color-selected": "{colors.colorPalette.tertiary}",
			},
			secondary: {
				"--tag-bg-selected": "{colors.colorPalette.secondary}",
				"--tag-color-selected": "{colors.colorPalette.primary}",
			},
			tertiary: {
				"--tag-bg-selected": "inherit",
				"--tag-color-selected": "{colors.colorPalette.primary}",
			},
		},

		iconOnly: {
			true: {
				w: "var(--tag-size)",
				px: "calc({spacing.4} * 0)",
			},
		},
	},

	defaultVariants: {
		size: "md",
		tone: "primary",
		iconOnly: false,
		variant: "primary",
	},
});
