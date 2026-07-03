import { defineSlotRecipe } from "@pandacss/dev";

import { elevatedRecipe } from "../recipes/elevated";

const { base } = elevatedRecipe;

export const alertRecipe = defineSlotRecipe({
	className: "alert",
	slots: ["root", "content", "title", "description", "indicator", "control"],
	base: {
		root: {
			...base,
			display: "grid",
			alignItems: "center",
			fontSize: "{fontSizes.14}",
			rounded: "calc({radii.4} * 3)",
			columnGap: "calc({spacing.4} * 2)",
			color: "{colors.colorPalette.primary}",
			gridTemplateColumns: "auto minmax(0, 1fr) auto",

			"&:has([data-part=description])": {
				alignItems: "start",
			},

			"--alert-color":
				"color-mix(in oklab,{colors.colorPalette.primary}, 10% {colors.fg.primary})",
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
			minW: "0",
			display: "flex",
			flexDirection: "column",
			gap: "calc({spacing.4} * 1)",
		},
		title: {
			fontWeight: "500",
			fontSize: "{fontSizes.14}",
			color: "var(--alert-color)",
			lineHeight: "{lineHeights.sm}",
		},
		description: {
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.secondary}",
		},
	},
	variants: {
		status: {
			default: {
				root: {
					colorPalette: "neutral",
				},
			},
			accent: {
				root: {
					colorPalette: "accent",
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
			destructive: {
				root: {
					colorPalette: "destructive",
				},
			},
		},
		elevated: {
			false: {
				root: {
					shadow: "none",
					borderColor: "{colors.transparent}",
				},
			},
		},
	},
	compoundVariants: [
		{
			status: "default",
			css: {
				root: {
					"--alert-color": "{colors.colorPalette.primary}",
				},
			},
		},
	],
	defaultVariants: {
		elevated: true,
		status: "default",
	},
});
