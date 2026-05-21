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
		trigger: {
			"&[data-copied]": {
				opacity: 0.5,
				cursor: "not-allowed !important",
			},
		},
		label: {},
		control: {
			display: "flex",
			w: "{sizes.full}",
		},
	},
});
