import { defineSlotRecipe } from "@pandacss/dev";

export const codeBlockRecipe = defineSlotRecipe({
	className: "code-block",
	slots: [
		"root",
		"header",
		"title",
		"control",
		"copyTrigger",
		"collaspseTrigger",
		"content",
		"code",
		"codeText",
	],
	base: {},
});
