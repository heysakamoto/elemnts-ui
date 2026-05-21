import { defineSlotRecipe } from "@pandacss/dev";

export const kbdRecipe = defineSlotRecipe({
	className: "kbd",
	slots: ["root", "item"],
	base: {
		root: {
			gap: "6",
			lineHeight: "1",
			userSelect: "none",
			alignItems: "center",
			display: "inline-flex",
			colorPalette: "accent",
			fontSize: "var(--kbd-text-fs)",
		},
		item: {
			lineHeight: "1",
			flexShrink: "0",
			fontWeight: "500",
			fontSize: "inherit",
			h: "var(--kbd-size)",
			rounded: "{radii.8}",
			alignItems: "center",
			color: "var(--kbd-fg)",
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
					"--kbd-text-fs": "{fontSizes.14}",
				},
			},
			md: {
				root: {
					"--kbd-size": "{sizes.28}",
					"--kbd-text-fs": "{fontSizes.14}",
				},
			},
			lg: {
				root: {
					"--kbd-size": "{sizes.32}",
					"--kbd-text-fs": "{fontSizes.14}",
				},
			},
			xl: {
				root: {
					"--kbd-size": "{sizes.36}",
					"--kbd-text-fs": "{fontSizes.14}",
				},
			},
		},
		variant: {
			primary: {
				root: {
					"--kbd-bg": "{colors.colorPalette.primary}",
					"--kbd-fg": "{colors.colorPalette.tertiary}",
				},
			},
			secondary: {
				root: {
					"--kbd-fg": "{colors.colorPalette.primary}",
					"--kbd-bg": "{colors.colorPalette.secondary}",
				},
			},
			tertiary: {
				root: {
					"--kbd-bg": "{colors.bg.tertiary}",
					"--kbd-shadow": "{shadows.2}",
					"--kbd-fg": "{colors.colorPalette.primary}",
					"--kbd-border": "1px solid {colors.stroke.secondary}",
				},
			},
			surface: {
				root: {
					"--kbd-bg": "{colors.bg.secondary}",
					"--kbd-fg": "{colors.colorPalette.primary}",
				},
			},
			ghost: {
				root: {
					"--kbd-bg": "{colors.transparent}",
					"--kbd-px": "calc({spacing.4} * 0)",
					"--kbd-radius": "calc({radii.4} * 0)",
					"--kbd-fg": "{colors.colorPalette.primary}",
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
