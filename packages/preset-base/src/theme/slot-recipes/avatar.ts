import { defineSlotRecipe } from "@pandacss/dev";

export const avatarRecipe = defineSlotRecipe({
	className: "avatar",
	slots: ["root", "image", "fallback"],
	base: {
		root: {
			flexShrink: 0,
			overflow: "hidden",
			alignItems: "center",
			display: "inline-flex",
			rounded: "{radii.full}",
			justifyContent: "center",
			color: "var(--avatar-color)",
			boxSize: "var(--avatar-size)",
			bgColor: "var(--avatar-bg-color)",
			shadow: "var(--avatar-shadow, none)",
			border: "var(--avatar-border, none)",
		},
		image: {
			objectFit: "cover",
			objectPosition: "center",
			boxSize: "{sizes.full}",
		},
		fallback: {
			color: "inherit",
			alignItems: "center",
			display: "inline-flex",
			boxSize: "{sizes.full}",
			justifyContent: "center",
			fontSize: "{fontSizes.14}",
			backgroundColor: "inherit",
			lineHeight: "{lineHeights.none}",
		},
	},

	variants: {
		size: {
			"2xs": {
				root: {
					"--avatar-size": "calc({sizes.4} * 5)",
				},
			},
			xs: {
				root: {
					"--avatar-size": "calc({sizes.4} * 6)",
				},
			},
			sm: {
				root: {
					"--avatar-size": "calc({sizes.4} * 7)",
				},
			},
			md: {
				root: {
					"--avatar-size": "calc({sizes.4} * 8)",
				},
			},
			lg: {
				root: {
					"--avatar-size": "calc({sizes.4} * 9)",
				},
			},
			xl: {
				root: {
					"--avatar-size": "calc({sizes.4} * 10)",
				},
			},
			"2xl": {
				root: {
					"--avatar-size": "calc({sizes.4} * 12)",
				},
			},
		},
		variant: {
			primary: {
				root: {
					"--avatar-bg-color": "{colors.colorPalette.primary}",
					"--avatar-color": "{colors.colorPalette.tertiary}",
				},
			},
			secondary: {
				root: {
					"--avatar-bg-color": "{colors.colorPalette.secondary}",
					"--avatar-color": "{colors.colorPalette.primary}",
				},
			},
			tertiary: {
				root: {
					"--avatar-shadow": "{shadows.2}",
					"--avatar-color": "{colors.colorPalette.primary}",
					"--avatar-bg-color": "{colors.colorPalette.tertiary}",
					"--avatar-border": "1px solid {colors.stroke.secondary}",
				},
			},
			surface: {
				root: {
					"--avatar-bg-color": "{colors.colorPalette.surface}",
					"--avatar-color": "{colors.colorPalette.tertiary}",
				},
			},
		},
	},

	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
