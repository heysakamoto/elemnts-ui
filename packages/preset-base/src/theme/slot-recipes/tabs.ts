import { defineSlotRecipe } from "@pandacss/dev";

export const tabsRecipe = defineSlotRecipe({
	className: "tabs",
	slots: ["root", "content", "list", "trigger", "indicator", "panel"],
	base: {
		root: {
			display: "flex",
			w: "{sizes.full}",
			colorPalette: "accent",
			flexDirection: "column",

			_vertical: {
				flexDirection: "row",
			},
		},
		list: {
			"--tabs-radius": "{radii.full}",

			display: "flex",
			position: "relative",
			p: "calc({spacing.2} * 0.5)",
			rounded: "calc(var(--tabs-radius) + 1px)",

			_vertical: {
				h: "{sizes.fit}",
				flexDirection: "column",
			},
		},
		trigger: {
			zIndex: "1",
			cursor: "pointer",
			w: "{sizes.full}",
			alignItems: "center",
			h: "var(--tabs-size)",
			display: "inline-flex",
			justifyContent: "center",
			rounded: "var(--tabs-radius)",
			color: "{colors.fg.secondary}",
			lineHeight: "{lineHeights.none}",
			fontSize: "var(--tabs-font-size)",
			px: "calc(var(--tabs-size) * 0.4)",
			transition: "color 100ms ease-in-out",

			"&:not([data-selected])": {
				_hover: {
					color: "{colors.fg.primary}",
				},
			},

			_selected: {
				color: "var(--tabs-color, {colors.fg.primary})",
			},
		},
		indicator: {
			zIndex: "0",
			w: "var(--width)",
			h: "var(--height)",
			rounded: "var(--tabs-radius)",
			shadow: "var(--tabs-indicator-shadow, none)",
			color: "var(--tabs-indicator-color, transparent)",
			bgColor: "var(--tabs-indicator-bg-color, transparent)",

			_before: {
				left: "0",
				content: "''",
				rounded: "{radii.full}",
				bgColor: "{colors.current}",
			},
			_horizontal: {
				_before: {
					h: "{sizes.2}",
					w: "var(--width)",
				},
			},
			_vertical: {
				_before: {
					h: "var(--height)",
					w: "{sizes.2}",
				},
			},
		},

		content: {
			display: "flex",
			flexDirection: "column",
		},
	},
	variants: {
		size: {
			xs: {
				root: {
					"--tabs-size": "calc({sizes.4} * 6)",
					"--tabs-font-size": "{fontSizes.12}",
				},
			},
			sm: {
				root: {
					"--tabs-size": "calc({sizes.4} * 7)",
					"--tabs-font-size": "{fontSizes.14}",
				},
			},
			md: {
				root: {
					"--tabs-size": "calc({sizes.4} * 8)",
					"--tabs-font-size": "{fontSizes.14}",
				},
			},
			lg: {
				root: {
					"--tabs-size": "calc({sizes.4} * 9)",
					"--tabs-font-size": "{fontSizes.14}",
				},
			},
			xl: {
				root: {
					"--tabs-size": "calc({sizes.4} * 10)",
					"--tabs-font-size": "{fontSizes.14}",
				},
			},
		},
		variant: {
			primary: {
				root: {
					"--tabs-color": "{colors.colorPalette.primary}",
					"--tabs-indicator-bg-color": "{colors.bg.tertiary}",
					"--tabs-indicator-shadow":
						"{shadows.2}, 0 0 0 1px {colors.stroke.secondary}",
				},
			},
			secondary: {
				root: {
					"--tabs-color": "{colors.colorPalette.tertiary}",
					"--tabs-indicator-bg-color": "{colors.colorPalette.primary}",
				},
			},
			tertiary: {
				root: {
					"--tabs-radius": "calc({radii.4} * 0)",
					"--tabs-indicator-color": "var(--tabs-color)",
					"--tabs-color": "{colors.colorPalette.primary}",
				},
			},
		},
	},
	defaultVariants: {
		size: "md",
		variant: "primary",
	},
});
