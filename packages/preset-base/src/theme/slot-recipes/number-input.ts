import { defineSlotRecipe } from "@pandacss/dev";

export const numberInputRecipe = defineSlotRecipe({
	className: "number-input",
	slots: [
		"root",
		"label",
		"input",
		"control",
		"valueText",
		"incrementTrigger",
		"decrementTrigger",
		"scrubber",
	],
	base: {
		input: {
			w: "{sizes.full}",
			fontFamily: "inherit",
			alignItems: "center",
			display: "inline-flex",
			lineHeight: "{lineHeights.none}",
		},
		label: {},
		control: {
			display: "flex",
			gap: "{spacing.8}",
			alignItems: "center",
		},
		valueText: {
			color: "{colors.fg.primary}",
			lineHeight: "{lineHeights.none}",
			fontFeatureSettings: "'tnum', 1, 'lnum' 1",
			fontVariantNumeric: "tabular-nums lining-nums",
		},
	},
});
