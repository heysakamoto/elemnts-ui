import { defineSlotRecipe } from "@pandacss/dev";

export const carouselRecipe = defineSlotRecipe({
	className: "carousel",
	slots: [
		"root",
		"indicator",
		"control",
		"item",
		"nextTrigger",
		"prevTrigger",
		"viewport",
		"itemGroup",
		"indicatorGroup",
		"autoplayTrigger",
		"autoplayIndicator",
		"progressText",
	],

	base: {
		root: {
			display: "flex",
			w: "{sizes.full}",
			gap: "{spacing.16}",
			colorPalette: "accent",
			flexDirection: "column",

			_vertical: {
				h: "{sizes.full}",
				flexDirection: "row",
			},
		},
		control: {
			display: "flex",
			gap: "{spacing.12}",
			alignItems: "center",

			_horizontal: {
				h: "{sizes.full}",
				flexDirection: "row",
			},

			_vertical: {
				w: "{sizes.full}",
				flexDirection: "column",
			},
		},
		itemGroup: {
			flex: "1 0 100%",
			overflow: "hidden",
			boxSize: "{sizes.full}",
		},
		item: {
			flex: "1",
			display: "flex",
			boxSize: "{sizes.full}",
		},
		prevTrigger: {
			flexShrink: 0,
		},
		nextTrigger: {
			flexShrink: 0,
		},
		progressText: {
			lineHeight: "{lineHeights.sm}",
			letterSpacing: "{letterSpacings.sm}",
		},
		indicatorGroup: {
			flexGrow: 1,
			display: "flex",
			justifyContent: "center",
			gap: "calc({spacing.4} * 0.5)",

			_vertical: {
				justifyContent: "center",
				flexDirection: "column",
			},
		},
		indicator: {
			rounded: "{radii.full}",
			bgColor: "{colors.bg.secondary}",
			boxSize: "calc({spacing.4} * 2)",

			_current: {
				bgColor: "{colors.colorPalette.primary}",
			},
		},
	},
});
