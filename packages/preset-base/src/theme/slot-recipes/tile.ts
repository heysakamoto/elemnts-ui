import { defineSlotRecipe } from "@pandacss/dev";

export const tileRecipe = defineSlotRecipe({
	className: "tile",
	slots: ["root", "content", "control", "title", "description", "indicator"],
	base: {
		root: {
			display: "flex",
			cursor: "pointer",
			px: "var(--tile-px)",
			alignItems: "center",
			py: "var(--tile-py)",
			position: "relative",
			justifyContent: "start",
			bgColor: "var(--tile-bg)",
			fontSize: "{fontSizes.14}",
			color: "var(--tile-color)",
			shadow: "var(--tile-shadow)",
			gap: "calc({spacing.4} * 1)",
			border: "var(--tile-border, none)",

			_selected: {
				bgColor: "var(--tile-bg-checked)",
				color: "var(--tile-color-checked)",
				"& svg, [data-part=description]": {
					color: "inherit",
				},
			},

			"& > svg": {
				color: "{colors.icon.secondary}",
			},
		},
		indicator: {
			boxSize: "fit",
			color: "inherit",
		},
		control: {
			boxSize: "fit",
		},
		content: {
			display: "flex",
			w: "{sizes.full}",
			flexDirection: "column",
			gap: "calc({spacing.4} * 1)",
		},
		title: {
			flexGrow: 1,
			color: "inherit",
			fontWeight: "500",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "start",
			fontSize: "{fontSizes.14}",
			gap: "calc({spacing.4} * 2)",
			lineHeight: "{lineHeights.none}",

			"& > svg": {
				color: "{colors.icon.secondary}",
			},
		},
		description: {
			fontSize: "{fontSizes.12}",
			color: "{colors.fg.secondary}",
		},
	},

	variants: {
		orientation: {
			horizontal: {
				root: {
					flexDirection: "row",
				},
			},
			vertical: {
				root: {
					flexDirection: "column",
				},
			},
		},
		size: {
			xs: {
				root: {
					"--tile-py": "calc({sizes.4} * 2)",
					"--tile-px": "calc({spacing.4} * 3)",
				},
			},
			sm: {
				root: {
					"--tile-py": "calc({sizes.4} * 2.5)",
					"--tile-px": "calc({spacing.4} * 3.5)",
				},
			},
			md: {
				root: {
					"--tile-py": "calc({sizes.4} * 3)",
					"--tile-px": "calc({spacing.4} * 4)",
				},
			},
			lg: {
				root: {
					"--tile-py": "calc({sizes.4} * 3.5)",
					"--tile-px": "calc({spacing.4} * 4.5)",
				},
			},
			xl: {
				root: {
					"--tile-py": "calc({sizes.4} * 4)",
					"--tile-px": "calc({spacing.4} * 5)",
				},
			},
		},

		tone: {
			primary: {
				root: {
					"--tile-shadow": "{shadows.2}",
					"--tile-bg": "{colors.transparent}",
					"--tile-color": "{colors.fg.primary}",
					"--tile-border": "1px solid {colors.stroke.tertiary}",
				},
			},
			secondary: {
				root: {
					"--tile-bg": "{colors.bg.secondary}",
					"--tile-color": "{colors.fg.primary}",
				},
			},
			tertiary: {
				root: {
					"--tile-bg": "{colors.transparent}",
					"--tile-color": "{colors.fg.primary}",
				},
			},
		},

		variant: {
			primary: {
				root: {
					"--tile-bg-checked": "{colors.colorPalette.primary}",
					"--tile-color-checked": "{colors.colorPalette.tertiary}",
				},
			},
			secondary: {
				root: {
					"--tile-bg-checked": "{colors.colorPalette.secondary}",
					"--tile-color-checked": "{colors.colorPalette.primary}",
				},
			},
			tertiary: {
				root: {
					"--tile-bg-checked": "{colors.transparent}",
					"--tile-color-checked": "{colors.colorPalette.primary}",
				},
			},
		},
	},

	defaultVariants: {
		size: "sm",
		tone: "primary",
		variant: "primary",
		orientation: "vertical",
	},
});
