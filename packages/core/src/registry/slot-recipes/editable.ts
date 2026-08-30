import { defineSlotRecipe } from "@pandacss/dev";

export const editableRecipe = defineSlotRecipe({
	className: "editable",
	slots: [
		"root",
		"control",
		"input",
		"area",
		"label",
		"preview",
		"editTrigger",
		"submitTrigger",
		"cancelTrigger",
	],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
		},
		preview: {
			w: "full",
			cursor: "text",
			alignItems: "center",
			display: "inline-flex",
			justifyContent: "start",
		},
		input: {
			fieldSizing: "content",
		},
		area: {
			flexGrow: 1,
		},
		label: {},
		control: {
			display: "flex",
			alignItems: "center",
			gap: "calc({spacing.4} * 2)",
		},
	},
});
