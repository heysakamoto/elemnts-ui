import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const accordionRecipeDefaultVariants = {};
const accordionRecipeCompoundVariants = [];

const accordionRecipeSlotNames = [
	["root", "accordion__root"],
	["item", "accordion__item"],
	["itemTrigger", "accordion__itemTrigger"],
	["itemContent", "accordion__itemContent"],
	["itemIndicator", "accordion__itemIndicator"],
	["separator", "accordion__separator"],
];
const accordionRecipeSlotFns = /* @__PURE__ */ accordionRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			accordionRecipeDefaultVariants,
			getSlotCompoundVariant(accordionRecipeCompoundVariants, slotName),
		),
	],
);

const accordionRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		accordionRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const accordionRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...accordionRecipeDefaultVariants,
	...compact(variants),
});

export const accordionRecipe = /* @__PURE__ */ Object.assign(
	accordionRecipeFn,
	{
		__recipe__: false,
		__name__: "accordionRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: accordionRecipeVariantKeys,
		variantMap: {},
		splitVariantProps(props) {
			return splitProps(props, accordionRecipeVariantKeys);
		},
		getVariantProps,
	},
);
