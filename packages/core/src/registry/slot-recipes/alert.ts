import { defineSlotRecipe } from "@pandacss/dev";

export const alertRecipe = defineSlotRecipe({
	className: "alert",
	slots: ["root", "content", "title", "description", "indicator", "control"],
	base: {
		root: {
			py: "8",
			px: "12",
			display: "flex",
			alignItems: "center",
			fontSize: "{fontSizes.14}",
			rounded: "calc({radii.4} * 3)",
			columnGap: "calc({spacing.4} * 2)",

			"&:has([data-part=description])": {
				alignItems: "start",
			},
		},
		control: {
			display: "flex",
			gap: "{spacing.8}",
			alignItems: "center",
		},
		indicator: {
			display: "flex",
			color: "var(--alert-color)",

			"& > svg": {
				color: "inherit",
			},
		},
		content: {
			flexGrow: 1,
			display: "flex",
			flexDirection: "column",
			gap: "calc({spacing.4} * 1)",
		},
		title: {
			fontWeight: "500",
			color: "inherit",
			fontSize: "{fontSizes.14}",
			lineHeight: "{lineHeights.sm}",
		},
		description: {
			color: "inherit",
			fontSize: "{fontSizes.14}",
		},
	},
	variants: {
		status: {
			default: {
				root: {
					colorPalette: "neutral",
				},
			},
			info: {
				root: {
					colorPalette: "accent",
				},
			},
			destructive: {
				root: {
					colorPalette: "destructive",
				},
			},
			success: {
				root: {
					colorPalette: "success",
				},
			},
			warning: {
				root: {
					colorPalette: "warning",
				},
			},
		},
		variant: {
			primary: {
				root: {
					color: "{colors.colorPalette.tertiary}",
					bgColor: "{colors.colorPalette.primary}",
				},
			},
			secondary: {
				root: {
					color: "{colors.colorPalette.primary}",
					bgColor: "{colors.colorPalette.secondary}",
				},
			},
			tertiary: {
				root: {
					bgColor: "{colors.transparent}",
					color: "{colors.colorPalette.primary}",
					boxShadow: "0 0 0 1px {colors.colorPalette.stroke}",
				},
			},
			surface: {
				root: {
					color: "{colors.colorPalette.primary}",
					bgColor: "{colors.colorPalette.secondary}",
				},
			},
		},
	},
	defaultVariants: {
		status: "info",
		variant: "secondary",
	},
});
