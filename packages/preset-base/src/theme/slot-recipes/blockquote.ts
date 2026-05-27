import { defineSlotRecipe } from "@pandacss/dev";

export const blockquoteRecipe = defineSlotRecipe({
	className: "blockquote",
	slots: ["root", "cite", "caption", "indication", "content"],
	base: {},
});
