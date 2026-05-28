import { defineRecipe } from "@pandacss/dev";

export const itemRecipe = defineRecipe({
	className: "item",
	base: {
		flexShrink: 0,
		w: "{sizes.full}",
		cursor: "pointer",
		gap: "{spacing.8}",
		position: "relative",
		alignItems: "center",
		display: "inline-flex",
		justifyContent: "start",
		bgColor: "var(--item-bg)",
		fontSize: "{fontSizes.14}",
		h: "var(--item-size, auto)",
		color: "{colors.fg.primary}",
		shadow: "var(--item-shadow)",
		rounded: "calc({spacing.4} * 3)",
		lineHeight: "{lineHeights.none}",
		px: "calc(var(--item-size) * 0.3)",
		border: "var(--item-border, none)",

		"& > svg": {
			color: "{colors.icon.secondary}",
		},

		"&:not([data-selected], [aria-selected=true]):is(:hover, [data-highlighted])":
			{
				color: "var(--item-color-selected)",
				bgColor:
					"color-mix(in oklab, var(--item-bg-selected), 10% {colors.transparent})",
				"& > svg": {
					color: "inherit",
				},
			},

		_selected: {
			bgColor: "var(--item-bg-selected)",
			color: "var(--item-color-selected)",
			"& > svg": {
				color: "inherit",
			},
		},
	},

	variants: {
		size: {
			xs: {
				"--item-size": "calc({sizes.4} * 6)",
			},
			sm: {
				"--item-size": "calc({sizes.4} * 7)",
			},
			md: {
				"--item-size": "calc({sizes.4} * 8)",
			},
			lg: {
				"--item-size": "calc({sizes.4} * 9)",
			},
			xl: {
				"--item-size": "calc({sizes.4} * 10)",
			},
		},

		tone: {
			primary: {
				"--item-bg": "{colors.transparent}",
			},
			secondary: {
				"--item-bg": "{colors.bg.secondary}",
			},
			tertiary: {
				"--item-shadow": "{shadows.2}",
				"--item-bg": "{colors.transparent}",
				"--item-border": "1px solid {colors.stroke.secondary}",
			},
		},

		variant: {
			primary: {
				"--item-color": "{colors.colorPalette.tertiary}",
				"--item-bg-selected": "{colors.colorPalette.primary}",
				"--item-color-selected": "{colors.colorPalette.tertiary}",
			},
			secondary: {
				"--item-bg-selected": "{colors.colorPalette.secondary}",
				"--item-color-selected": "{colors.colorPalette.primary}",
			},
			tertiary: {
				"--item-bg-selected": "{colors.transparent}",
				"--item-color-selected": "{colors.colorPalette.primary}",
			},
		},

		iconOnly: {
			true: {
				w: "var(--item-size)",
				justifyContent: "center",
				px: "calc({spacing.4} * 0)",
			},
		},
	},

	defaultVariants: {
		size: "md",
		iconOnly: false,
		tone: "primary",
		variant: "primary",
	},
});
