import { defineSlotRecipe } from "@pandacss/dev";

export const timerRecipe = defineSlotRecipe({
	className: "timer",
	slots: [
		"root",
		"control",
		"area",
		"item",
		"itemLabel",
		"itemGroup",
		"separator",
		"actionTrigger",
	],
	base: {
		area: {
			display: "flex",
		},
		control: {
			display: "flex",
			flexDirection: "column",
		},
		item: {
			fontWeight: "500",
			fontSize: "{fontSizes.16}",
			lineHeight: "{lineHeights.none}",
			fontFeatureSettings: "'tnum', 1, 'lnum' 1",
			fontVariantNumeric: "tabular-nums lining-nums",
		},
		itemGroup: {
			display: "flex",
			flexDirection: "column",
			gap: "4",
		},
		separator: {
			fontSize: "{fontSizes.16}",
			lineHeight: "{lineHeights.none}",
			letterSpacing: "{letterSpacings.sm}",
		},
	},
});
