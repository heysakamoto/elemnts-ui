import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const drawerRecipeDefaultVariants = {};
const drawerRecipeCompoundVariants = [];

const drawerRecipeSlotNames = [
	["trigger", "drawer__trigger"],
	["content", "drawer__content"],
	["backdrop", "drawer__backdrop"],
	["positioner", "drawer__positioner"],
	["grabber", "drawer__grabber"],
	["title", "drawer__title"],
	["indent", "drawer__indent"],
	["stack", "drawer__stack"],
	["swipeArea", "drawer__swipeArea"],
	["indentBackground", "drawer__indentBackground"],
	["closeTrigger", "drawer__closeTrigger"],
	["description", "drawer__description"],
	["grabberIndicator", "drawer__grabberIndicator"],
];
const drawerRecipeSlotFns = /* @__PURE__ */ drawerRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			drawerRecipeDefaultVariants,
			getSlotCompoundVariant(drawerRecipeCompoundVariants, slotName),
		),
	],
);

const drawerRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		drawerRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const drawerRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...drawerRecipeDefaultVariants,
	...compact(variants),
});

export const drawerRecipe = /* @__PURE__ */ Object.assign(drawerRecipeFn, {
	__recipe__: false,
	__name__: "drawerRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: drawerRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, drawerRecipeVariantKeys);
	},
	getVariantProps,
});
