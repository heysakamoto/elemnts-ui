import { defineSlotRecipe } from "@pandacss/dev";

export const tocRecipe = defineSlotRecipe({
	className: "toc",
	slots: [
		"root",
		"content",
		"nav",
		"item",
		"list",
		"title",
		"indicator",
		"link",
	],
	base: {
		root: {
			w: "{sizes.full}",
		},
		list: {
			display: "flex",
			flexDirection: "column",
		},
		item: {},
		nav: {},
		indicator: {},
		link: {},
		title: {},
		content: {},
	},
});
