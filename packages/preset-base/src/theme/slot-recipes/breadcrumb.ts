import { defineSlotRecipe } from "@pandacss/dev";

export const breadcrumbRecipe = defineSlotRecipe({
	className: "breadcrumb",
	slots: [
		"root",
		"list",
		"item",
		"link",
		"current-link",
		"separator",
		"ellipsis",
	],
	base: {},
});
