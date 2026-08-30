import { defineSlotRecipe } from "@pandacss/dev";

export const paginationRecipe = defineSlotRecipe({
	className: "pagination",
	slots: [
		"root",
		"ellipsis",
		"item",
		"prevTrigger",
		"nextTrigger",
		"firstTrigger",
		"lastTrigger",
	],
	base: {
		root: {
			display: "flex",
			alignItems: "center",
			gap: "calc({spacing.4} * 1)",
		},
		ellipsis: {
			display: "inline-flex",
			alignItems: "center",
		},
		item: {
			cursor: "pointer",
			alignItems: "center",
			display: "inline-flex",
		},
		nextTrigger: {
			cursor: "pointer",
			alignItems: "center",
			display: "inline-flex",
		},
		prevTrigger: {
			cursor: "pointer",
			alignItems: "center",
			display: "inline-flex",
		},
		firstTrigger: {
			cursor: "pointer",
			alignItems: "center",
			display: "inline-flex",
		},
		lastTrigger: {
			cursor: "pointer",
			alignItems: "center",
			display: "inline-flex",
		},
	},
});
