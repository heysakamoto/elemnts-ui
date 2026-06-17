import { defineSemanticTokens } from "@pandacss/dev";

export const shadows = defineSemanticTokens.shadows({
	"1": {
		value: {
			_light: "none",
			_dark: "none",
		},
	},
	"2": {
		value: {
			_light: "0 1px 1px -.5px #0000000f",
			_dark: "inset 0 1px 0 0 #ffffff03, 0 1px 1px -.5px #0000002e",
		},
	},
	"3": {
		value: {
			_light: "0 1px 1px -.5px #0000000f, 0 3px 3px -1.5px #0000000f",
			_dark:
				"inset 0 1px 0 0 #ffffff05, 0 1px 1px -.5px #0000002e, 0 3px 3px -1.5px #0000002e",
		},
	},
	"4": {
		value: {
			_light:
				"0 1px 1px -.5px #0000000f, 0 3px 3px -1.5px #0000000f, 0 6px 6px -3px #0000000f",
			_dark:
				"inset 0 1px 0 0 #ffffff05, 0 1px 1px -.5px #0000002e, 0 3px 3px -1.5px #0000002e, 0 6px 6px -3px #0000002e",
		},
	},
	"5": {
		value: {
			_light:
				"0 1px 1px -.5px #0000000f, 0 3px 3px -1.5px #0000000f, 0 6px 6px -3px #0000000f, 0 12px 12px -6px #0000000f",
			_dark:
				"inset 0 1px 0 0 #ffffff0a, 0 1px 1px -.5px #0000002e, 0 3px 3px -1.5px #0000002e, 0 6px 6px -3px #0000002e, 0 12px 12px -6px #0000002e",
		},
	},
	"6": {
		value: {
			_light:
				"0 1px 1px -.5px #0000000f, 0 3px 3px -1.5px #0000000f, 0 6px 6px -3px #0000000f, 0 12px 12px -6px #0000000f, 0 24px 24px -12px #0000000f",
			_dark:
				"inset 0 1px 0 0 #ffffff0a, 0 1px 1px -.5px #0000002e, 0 3px 3px -1.5px #0000002e, 0 6px 6px -3px #0000002e, 0 12px 12px -6px #0000002e, 0 24px 24px -12px #0000002e",
		},
	},
	"7": {
		value: {
			_light:
				"0 1px 1px -.5px #0000000f, 0 3px 3px -1.5px #0000000f, 0 6px 6px -3px #0000000f, 0 12px 12px -6px #0000000f, 0 24px 24px -12px #0000000f, 0 48px 48px -24px #0000000f",
			_dark:
				"inset 0 1px 0 0 #ffffff0f, 0 1px 1px -.5px #0000002e, 0 3px 3px -1.5px #0000002e, 0 6px 6px -3px #0000002e, 0 12px 12px -6px #0000002e, 0 24px 24px -12px #0000002e, 0 48px 48px -24px #0000002e",
		},
	},
	"8": {
		value: {
			_light:
				"0 1px 1px -.5px #0000000f, 0 3px 3px -1.5px #0000000f, 0 6px 6px -3px #0000000f, 0 12px 12px -6px #0000000f, 0 24px 24px -12px #0000000f, 0 48px 48px -24px #0000000f, 0 96px 96px -48px #0000000f",
			_dark:
				"inset 0 1px 0 0 #ffffff0f, 0 1px 1px -.5px #0000002e, 0 3px 3px -1.5px #0000002e, 0 6px 6px -3px #0000002e, 0 12px 12px -6px #0000002e, 0 24px 24px -12px #0000002e, 0 48px 48px -24px #0000002e, 0 96px 96px -48px #0000002e",
		},
	},
});
