import { defineSlotRecipe } from "@pandacss/dev";

export const radioGroupRecipe = defineSlotRecipe({
	className: "radio-group",
	slots: ["root", "label", "item", "itemText", "itemControl", "indicator"],
	base: {
		label: {},
		root: {
			display: "flex",

			_vertical: {
				flexDirection: "column",
			},

			_horizontal: {
				flexWrap: "wrap",
				flexDirection: "row",
			},
		},
		indicator: {
			boxSize: "auto",
		},
		item: {
			_vertical: {
				w: "{sizes.full}",
			},
			alignItems: "center",
			position: "relative",
			display: "inline-flex",
			rounded: "{radii.full}",
			gap: "calc({spacing.4} * 2)",

			_disabled: {
				opacity: ".5",
				cursor: "not-allowed",
				pointerEvents: "none",
			},

			"& > svg": {
				color: "{colors.icon.secondary}",
			},
		},
		itemText: {
			flexGrow: 1,
			textAlign: "start",
			alignItems: "center",
			display: "inline-flex",
			fontSize: "{fontSizes.14}",
			gap: "calc({spacing.4} * 2)",
			lineHeight: "{lineHeights.none}",

			"& > svg": {
				color: "{colors.icon.secondary}",
			},
		},
		itemControl: {
			cursor: "pointer",
			display: "inline-flex",
			alignItems: "center",
			position: "relative",
		},
	},
	variants: {},
	defaultVariants: {},
});
