import { defineSlotRecipe } from "@pandacss/dev";

export const clipboardRecipe = defineSlotRecipe({
	className: "clipboard",
	slots: [
		"root",
		"trigger",
		"indicator",
		"control",
		"label",
		"input",
		"valueText",
	],
	base: {
		trigger: {},
		label: {},
		input: {},
		control: {
			display: "flex",
			w: "{sizes.full}",
		},
	},
});
