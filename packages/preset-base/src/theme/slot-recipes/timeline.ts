import { defineSlotRecipe } from "@pandacss/dev";

export const timelineRecipe = defineSlotRecipe({
	className: "timeline",
	slots: ["root", "content", "item", "separator", "indicator", "connector"],
	base: {},
});
