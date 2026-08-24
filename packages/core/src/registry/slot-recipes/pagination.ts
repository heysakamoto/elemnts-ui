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
			color: "{colors.fg.tertiary}",

			"& svg": {
				color: "{colors.fg.tertiary}",
			},
		},
		item: {
			cursor: "pointer",
			position: "relative",
			alignItems: "center",
			display: "inline-flex",
			lineHeight: "{lineHeights.none}",
		},
		nextTrigger: {
			cursor: "pointer",
			position: "relative",
			alignItems: "center",
			display: "inline-flex",
			lineHeight: "{lineHeights.none}",
		},
		prevTrigger: {
			cursor: "pointer",
			position: "relative",
			alignItems: "center",
			display: "inline-flex",
			lineHeight: "{lineHeights.none}",
		},
		firstTrigger: {
			cursor: "pointer",
			position: "relative",
			alignItems: "center",
			display: "inline-flex",
			lineHeight: "{lineHeights.none}",
		},
		lastTrigger: {
			cursor: "pointer",
			position: "relative",
			alignItems: "center",
			display: "inline-flex",
			lineHeight: "{lineHeights.none}",
		},
	},
});
