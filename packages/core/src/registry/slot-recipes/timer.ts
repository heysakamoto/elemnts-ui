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
			gap: "calc({spacing.4} * 1)",
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
			fontSize: "28px",
			lineHeight: "1.2",
			fontVariantNumeric: "inherit",
			fontFeatureSettings: "inherit",
		},
		separator: {
			fontWeight: "500",
			lineHeight: "1.33",
			fontSize: "{fontSizes.24}",
		},
	},
});
