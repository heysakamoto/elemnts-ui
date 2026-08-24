import { defineSlotRecipe } from "@pandacss/dev";

export const signaturePadRecipe = defineSlotRecipe({
	className: "signature-pad",
	slots: [
		"root",
		"control",
		"label",
		"clearTrigger",
		"segment",
		"segmentPath",
		"guide",
	],
	base: {
		root: {
			display: "flex",
			flexDirection: "column",
		},
		segment: {
			fill: "{colors.colorPalette.primary}",
		},
		control: {
			position: "relative",
		},
		guide: {
			boxSize: "{sizes.full}",
		},
	},

	variants: {},
	defaultVariants: {},
});
