import { defineSlotRecipe } from "@pandacss/dev";

export const navigationMenuRecipe = defineSlotRecipe({
	className: "navigation-menu",
	slots: [
		"root",
		"list",
		"item",
		"trigger",
		"link",
		"arrow",
		"indicator",
		"itemIndicator",
		"viewport",
		"viewportPositioner",
		"content",
	],
	base: {},
});
