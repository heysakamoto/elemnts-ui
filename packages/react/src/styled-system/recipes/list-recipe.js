import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const listRecipeDefaultVariants = {};
const listRecipeCompoundVariants = [];

const listRecipeSlotNames = [
	["root", "list__root"],
	["item", "list__item"],
	["indicator", "list__indicator"],
];
const listRecipeSlotFns = /* @__PURE__ */ listRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			listRecipeDefaultVariants,
			getSlotCompoundVariant(listRecipeCompoundVariants, slotName),
		),
	],
);

const listRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		listRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const listRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...listRecipeDefaultVariants,
	...compact(variants),
});

export const listRecipe = /* @__PURE__ */ Object.assign(listRecipeFn, {
	__recipe__: false,
	__name__: "listRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: listRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, listRecipeVariantKeys);
	},
	getVariantProps,
});
