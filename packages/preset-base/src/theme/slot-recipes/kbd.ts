import { defineSlotRecipe } from "@pandacss/dev";

export const kbdRecipe = defineSlotRecipe({
	className: "kbd",
	slots: ["root", "item", "itemGroup", "itemGroupText"],
	base: {
		root: {
			lineHeight: "1",
			userSelect: "none",
			alignItems: "center",
			display: "inline-flex",
			colorPalette: "accent",
			fontSize: "{fontSizes.14}",
			gap: "calc({sizes.4} * 3)",
		},
		itemGroup: {
			fontSize: "inherit",
			alignItems: "center",
			display: "inline-flex",
			gap: "calc({sizes.4} * 1)",
		},
		itemGroupText: {
			fontSize: "inherit",
			color: "{colors.fg.tertiary}",
			lineHeight: "{lineHeights.none}",
		},
		item: {
			lineHeight: "1",
			flexShrink: "0",
			fontWeight: "500",
			fontSize: "inherit",
			h: "var(--kbd-size)",
			rounded: "{radii.8}",
			alignItems: "center",
			color: "var(--kbd-color)",
			display: "inline-flex",
			bgColor: "var(--kbd-bg)",
			justifyContent: "center",
			border: "var(--kbd-border, none)",
			shadow: "var(--kbd-shadow, none)",
			px: "calc(var(--kbd-size) * 0.3)",
		},
	},

	variants: {
		size: {
			xs: {
				root: {
					"--kbd-size": "{sizes.20}",
					"--kbd-text-fs": "{fontSizes.14}",
				},
			},
			sm: {
				root: {
					"--kbd-size": "{sizes.24}",
				},
			},
			md: {
				root: {
					"--kbd-size": "{sizes.28}",
				},
			},
			lg: {
				root: {
					"--kbd-size": "{sizes.32}",
				},
			},
			xl: {
				root: {
					"--kbd-size": "{sizes.36}",
				},
			},
		},
		variant: {
			primary: {
				root: {
					"--kbd-bg": "{colors.colorPalette.primary}",
					"--kbd-color": "{colors.colorPalette.tertiary}",
				},
			},
			secondary: {
				root: {
					"--kbd-color": "{colors.colorPalette.primary}",
					"--kbd-bg": "{colors.colorPalette.secondary}",
				},
			},
			tertiary: {
				root: {
					"--kbd-shadow": "{shadows.3}",
					"--kbd-bg": "{colors.bg.tertiary}",
					"--kbd-color": "{colors.colorPalette.primary}",
					"--kbd-border": "1px solid {colors.stroke.secondary}",
				},
			},
			surface: {
				root: {
					"--kbd-bg": "{colors.bg.secondary}",
					"--kbd-color": "{colors.colorPalette.primary}",
				},
			},
			ghost: {
				root: {
					"--kbd-bg": "{colors.transparent}",
					"--kbd-px": "calc({spacing.4} * 0)",
					"--kbd-radius": "calc({radii.4} * 0)",
					"--kbd-color": "{colors.colorPalette.primary}",
				},
			},
		},

		iconOnly: {
			true: {
				root: {
					"--kbd-px": "calc({spacing.4} * 0)",
				},
				item: {
					w: "var(--kbd-size)",
				},
			},
		},
	},

	defaultVariants: {
		size: "sm",
		iconOnly: false,
		variant: "primary",
	},
});
