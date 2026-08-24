import { defineSlotRecipe } from "@pandacss/dev";

export const stepsRecipe = defineSlotRecipe({
	className: "steps",
	slots: [
		"root",
		"content",
		"list",
		"item",
		"trigger",
		"indicator",
		"separator",
		"completedContent",
		"nextTrigger",
		"prevTrigger",
		"progress",
		"trigger",
	],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",

			_vertical: {
				flexDirection: "row",
			},
		},
		list: {
			display: "flex",
			_vertical: {
				flexDirection: "column",
			},
		},
		content: { w: "{sizes.full}" },
		item: {
			display: "flex",
			alignItems: "center",
			_vertical: {
				flexDirection: "column",
			},

			"&:last-of-type [data-part=separator]": {
				display: "none",
			},
		},
	},
});
