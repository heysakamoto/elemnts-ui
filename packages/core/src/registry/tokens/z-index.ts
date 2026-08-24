import { defineTokens } from "@pandacss/dev";

export const zIndex = defineTokens.zIndex({
	hide: {
		value: "-1",
	},
	base: {
		value: "0",
	},
	sticky: {
		value: "10",
	},
	dropdown: {
		value: "20",
	},
	overlay: {
		value: "30",
	},
	modal: {
		value: "40",
	},
	toast: {
		value: "50",
	},
	max: {
		value: "999",
	},
});
