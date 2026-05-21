import { defineSlotRecipe } from "@pandacss/dev";

export const badgeRecipe = defineSlotRecipe({
	className: "badge",
	slots: ["root", "indicator"],
	base: {
		root: {
			position: "relative",
			colorPalette: "accent",
			display: "inline-flex",
			boxSize: "max-content",
		},
		indicator: {
			maxW: "max-content",
			position: "absolute",
			alignItems: "center",
			display: "inline-flex",
			rounded: "{radii.full}",
			fontWeight: "500",
			justifyContent: "center",
			bgColor: "var(--badge-bg)",
			h: "var(--badge-size)",
			minW: "var(--badge-size)",
			color: "var(--badge-color)",
			inset: "var(--badge-inset)",
			border: "var(--badge-border)",
			lineHeight: "{lineHeights.none}",
			fontSize: "var(--badge-font-size)",
			outline: "2px solid {colors.bg.primary}",
		},
	},
	variants: {
		size: {
			xs: {
				root: {
					"--badge-font-size": "{fontSizes.10}",
					"--badge-size": "calc({spacing.4} * 2)",
					"--badge-offset": "0px",
				},
			},
			sm: {
				root: {
					"--badge-font-size": "{fontSizes.10}",
					"--badge-size": "calc({spacing.4} * 2.5)",
					"--badge-offset": "0px",
				},
			},
			md: {
				root: {
					"--badge-font-size": "{fontSizes.10}",
					"--badge-size": "calc({spacing.4} * 4)",
					"--badge-offset": "calc(var(--badge-size) / -3)",
				},
			},
			lg: {
				root: {
					"--badge-font-size": "{fontSizes.10}",
					"--badge-size": "calc({spacing.4} * 4)",
					"--badge-offset": "calc(var(--badge-size) / -3)",
				},
			},
			xl: {
				root: {
					"--badge-font-size": "{fontSizes.12}",
					"--badge-size": "calc({spacing.4} * 5)",
					"--badge-offset": "calc(var(--badge-size) / -2)",
				},
			},
		},
		placement: {
			"top-left": {
				root: {
					"--badge-inset": "var(--badge-offset) auto auto var(--badge-offset)",
				},
			},
			"top-right": {
				root: {
					"--badge-inset": "var(--badge-offset) var(--badge-offset) auto auto",
				},
			},
			"bottom-left": {
				root: {
					"--badge-inset": "auto auto var(--badge-offset) var(--badge-offset)",
				},
			},
			"bottom-right": {
				root: {
					"--badge-inset": "auto var(--badge-offset) var(--badge-offset) auto",
				},
			},
		},

		variant: {
			primary: {
				root: {
					"--badge-bg": "{colors.colorPalette.primary}",
					"--badge-color": "{colors.colorPalette.tertiary}",
				},
			},
			secondary: {
				root: {
					"--badge-bg": "{colors.colorPalette.secondary}",
					"--badge-color": "{colors.colorPalette.primary}",
				},
			},
			tertiary: {
				root: {
					"--badge-bg": "{colors.bg.primary}",
					"--badge-color": "{colors.colorPalette.primary}",
					"--badge-border": ".5px solid {colors.stroke.secondary}",
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		variant: "primary",
		placement: "bottom-right",
	},
});
