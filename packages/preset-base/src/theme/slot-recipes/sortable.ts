import { defineSlotRecipe } from "@pandacss/dev";

export const sortableRecipe = defineSlotRecipe({
	className: "sortable",
	slots: ["root", "item-handle", "item"],
	base: {},
});
