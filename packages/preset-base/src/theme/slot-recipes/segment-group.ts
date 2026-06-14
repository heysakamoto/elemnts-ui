import { defineSlotRecipe } from "@pandacss/dev";

export const segmentGroupRecipe = defineSlotRecipe({
	className: "segment-group",
	slots: ["root", "label", "item", "indicator", "itemText", "itemControl"],
	base: {
		label: {},
		itemControl: {
			display: "flex",
		},
		root: {
			"--sg-border-radius": "{radii.full}",

			zIndex: "1",
			display: "flex",
			w: "fit-content",
			alignItems: "center",
			p: "calc({spacing.2} * 0.5)",
			rounded: "calc(var(--sg-border-radius) + 1px)",

			_vertical: {
				flexDirection: "column",
			},

			_horizontal: {
				flexDirection: "row",
			},
		},

		item: {
			w: "{sizes.full}",
			userSelect: "none",
			cursor: "pointer",
			gap: "{spacing.4}",
			h: "var(--sg-size)",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "center",
			color: "{colors.fg.secondary}",
			lineHeight: "{lineHeights.none}",
			rounded: "var(--sg-border-radius)",
			transition: "color 100ms ease-in-out",
			px: "calc(var(--sg-size) * 0.4)",

			"&:not([data-state=checked])": {
				_hover: {
					color: "{colors.fg.primary}",
				},
			},

			_checked: {
				color: "var(--sg-color)",
			},
		},
		itemText: {
			color: "inherit",
			textAlign: "center",
			fontSize: "var(--sg-font-size)",
			lineHeight: "{lineHeights.none}",

			_focusVisible: {
				outline: "none",
			},
		},
		indicator: {
			zIndex: "-1",
			w: "var(--width)",
			h: "var(--height)",
			left: "var(--left)",
			rounded: "var(--sg-border-radius)",
			border: "var(--sg-indicator-border, none)",
			shadow: "var(--sg-indicator-shadow, none)",
			color: "var(--sg-indicator-color, transparent)",
			bgColor: "var(--sg-indicator-bg-color, transparent)",
		},
	},
	variants: {
		fullWidth: {
			true: {
				root: {
					w: "{sizes.full}",
				},
			},
		},
		size: {
			xs: {
				root: {
					"--sg-font-size": "{fontSizes.12}",
					"--sg-size": "calc({sizes.4} * 6)",
				},
			},
			sm: {
				root: {
					"--sg-font-size": "{fontSizes.14}",
					"--sg-size": "calc({sizes.4} * 7)",
				},
			},
			md: {
				root: {
					"--sg-font-size": "{fontSizes.14}",
					"--sg-size": "calc({sizes.4} * 8)",
				},
			},
			lg: {
				root: {
					"--sg-font-size": "{fontSizes.14}",
					"--sg-size": "calc({sizes.4} * 9)",
				},
			},
			xl: {
				root: {
					"--sg-font-size": "{fontSizes.14}",
					"--sg-size": "calc({sizes.4} * 10)",
				},
			},
		},
		variant: {
			primary: {
				root: {
					"--sg-indicator-shadow": "{shadows.2}",
					"--sg-color": "{colors.colorPalette.primary}",
					"--sg-indicator-bg-color": "{colors.bg.tertiary}",
					"--sg-indicator-border": "1px solid {colors.stroke.secondary}",
				},
			},
			secondary: {
				root: {
					"--sg-color": "{colors.colorPalette.tertiary}",
					"--sg-indicator-bg-color": "{colors.bg.primary}",
				},
			},
			tertiary: {
				root: {
					"--sg-color": "{colors.colorPalette.primary}",
					"--sg-indicator-bg-color": "{colors.colorPalette.secondary}",
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		fullWidth: false,
		variant: "primary",
	},
});
