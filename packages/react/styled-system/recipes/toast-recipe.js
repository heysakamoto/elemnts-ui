import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const toastRecipeDefaultVariants = {};
const toastRecipeCompoundVariants = [];

const toastRecipeSlotNames = [
	["root", "toast__root"],
	["title", "toast__title"],
	["description", "toast__description"],
	["indicator", "toast__indicator"],
	["actionTrigger", "toast__actionTrigger"],
	["group", "toast__group"],
	["closeTrigger", "toast__closeTrigger"],
	["control", "toast__control"],
];
const toastRecipeSlotFns = /* @__PURE__ */ toastRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			toastRecipeDefaultVariants,
			getSlotCompoundVariant(toastRecipeCompoundVariants, slotName),
		),
	],
);

const toastRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		toastRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const toastRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...toastRecipeDefaultVariants,
	...compact(variants),
});

export const toastRecipe = /* @__PURE__ */ Object.assign(toastRecipeFn, {
	__recipe__: false,
	__name__: "toastRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: toastRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, toastRecipeVariantKeys);
	},
	getVariantProps,
});
