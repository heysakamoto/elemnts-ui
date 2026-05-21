import { defineTokens } from "@pandacss/dev";

export const cursor = defineTokens.cursor({
	button: {
		value: "pointer",
	},
	grab: {
		value: "grab",
	},
	disabled: {
		value: "not-allowed",
	},
});
