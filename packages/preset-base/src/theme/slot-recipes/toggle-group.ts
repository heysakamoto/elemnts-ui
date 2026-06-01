import { defineSlotRecipe } from "@pandacss/dev";
import { buttonGroupRecipe } from "./button-group";

const { base, variants, defaultVariants } = buttonGroupRecipe;

export const toggleGroupRecipe = defineSlotRecipe({
	className: "toggle-group",
	slots: ["root", "item"],
	base,
	variants,
	defaultVariants,
});
