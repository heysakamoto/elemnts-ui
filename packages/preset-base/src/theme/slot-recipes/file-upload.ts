import { defineSlotRecipe } from "@pandacss/dev";

export const fileUploadRecipe = defineSlotRecipe({
	className: "file-upload",
	slots: [
		"root",
		"trigger",
		"dropzone",
		"item",
		"itemDeleteTrigger",
		"itemGroup",
		"itemName",
		"itemPreview",
		"itemPreviewImage",
		"itemSizeText",
		"label",
		"clearTrigger",
	],
	base: {
		dropzone: {
			w: "{sizes.full}",
		},
		itemGroup: {
			listStyleType: "none",
		},
		label: {},
		itemName: {
			flexGrow: 1,
			fontSize: "{fontSizes.14}",
			color: "{colors.fg.primary}",
			lineHeight: "{lineHeights.xs}",
		},
		itemSizeText: {
			flexShrink: 0,
			fontSize: "{fontSizes.12}",
			color: "{colors.fg.tertiary}",
			lineHeight: "{lineHeights.xs}",
		},
	},
});
