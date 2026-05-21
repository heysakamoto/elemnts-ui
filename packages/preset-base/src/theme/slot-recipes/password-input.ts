import { defineSlotRecipe } from "@pandacss/dev";

export const passwordInputRecipe = defineSlotRecipe({
	className: "password",
	slots: [
		"root",
		"label",
		"control",
		"visibilityTrigger",
		"indicator",
		"input",
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
		},
		visibilityTrigger: {
			flexShrink: 0,
		},
	},
});
