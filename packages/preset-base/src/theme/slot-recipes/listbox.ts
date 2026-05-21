import { defineSlotRecipe } from "@pandacss/dev";

export const listboxRecipe = defineSlotRecipe({
	className: "listbox",
	slots: [
		"root",
		"label",
		"item",
		"input",
		"empty",
		"content",
		"itemText",
		"itemGroup",
		"valueText",
		"itemIndicator",
		"itemGroupLabel",
	],
	base: {
		root: {
			_focusVisible: {
				border: "none",
				outline: "none",
			},
		},
		content: {
			display: "flex",

			_focusVisible: {
				border: "none",
				outline: "none",
			},

			"&:is([data-layout=grid])": {
				display: "grid",
				gridTemplateColumns: "repeat(var(--column-count), 1fr)",
			},

			_horizontal: {
				flexDirection: "row",
			},

			_vertical: {
				flexDirection: "column",
			},
		},
		itemText: {
			flexGrow: 1,
		},
		item: {
			position: "relative",
			_horizontal: {
				flexShrink: 1,
			},
		},
		itemIndicator: {
			alignItems: "center",
			boxSize: "fit-content",
			display: "inline-flex",
			justifyContent: "center",
		},
		input: {
			w: "{sizes.full}",
			fontFamily: "inherit",
			alignItems: "center",
			display: "inline-flex",
			lineHeight: "{lineHeights.none}",
		},
		label: {},
		valueText: {
			lineHeight: "{lineHeights.sm}",
			letterSpacing: "{letterSpacings.sm}",
		},
		itemGroupLabel: {},
	},
});
