import { defineSlotRecipe } from "@pandacss/dev";

export const alertRecipe = defineSlotRecipe({
	className: "alert",
	slots: [
		"root",
		"trigger",
		"title",
		"description",
		"media",
		"indicator",
		"media",
		"control",
	],
	base: {
		root: {
			display: "grid",
			alignItems: "center",
			colorPalette: "accent",
			fontSize: "{fontSizes.14}",
			columnGap: "calc({spacing.4} * 2)",
			color: "{colors.colorPalette.primary}",
			gridTemplateColumns: "auto minmax(0, 1fr) auto",
		},
		control: {
			gap: "{spacing.8}",
			alignItems: "center",
			display: "inline-flex",
			gridColumn: "3/span 1",
		},
		media: {
			display: "flex",
			alignItems: "center",
			gridColumn: "1/span 1",
			justifyContent: "center",

			"& > svg": {
				color: "inherit",
			},
		},
		title: {
			fontWeight: "500",
			lineHeight: "{lineHeights.xs}",
			letterSpacing: "{letterSpacings.sm}",
		},
		description: {
			gridColumn: "2/span 1",
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.secondary}",
		},
	},

	variants: {},

	defaultVariants: {},
});
