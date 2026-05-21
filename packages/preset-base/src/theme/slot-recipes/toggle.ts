import { defineSlotRecipe } from "@pandacss/dev";

export const toggleRecipe = defineSlotRecipe({
	className: "toggle",
	slots: ["root", "indicator"],
	base: {
		root: {
			alignItems: "center",
			justifyContent: "center",
			fontSize: "{fontSizes.14}",
		},
	},
	variants: {},
	defaultVariants: {},
});
