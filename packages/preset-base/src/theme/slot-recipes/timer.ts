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
			alignItems: "center",
			fontSize: "{fontSizes.16}",
			lineHeight: "{lineHeights.none}",
		},
		control: {
			display: "flex",
			flexDirection: "column",
		},
		itemGroup: {
			gap: "4",
			display: "flex",
			flexDirection: "column",
			fontFeatureSettings: "'tnum' 1",
			fontVariantNumeric: "tabular-nums lining-nums",
		},
		item: {
			fontWeight: "500",
			fontSize: "inherit",
			fontVariantNumeric: "inherit",
			fontFeatureSettings: "inherit",
			lineHeight: "{lineHeights.none}",
		},
		separator: {
			fontSize: "inherit",
			lineHeight: "inherit",
		},
	},
});
