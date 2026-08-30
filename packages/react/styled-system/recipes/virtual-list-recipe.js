import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const virtualListRecipeDefaultVariants = {};
const virtualListRecipeCompoundVariants = [];

const virtualListRecipeSlotNames = [
	["root", "virtual-list__root"],
	["viewport", "virtual-list__viewport"],
	["content", "virtual-list__content"],
	["item", "virtual-list__item"],
];
const virtualListRecipeSlotFns = /* @__PURE__ */ virtualListRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			virtualListRecipeDefaultVariants,
			getSlotCompoundVariant(virtualListRecipeCompoundVariants, slotName),
		),
	],
);

const virtualListRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		virtualListRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const virtualListRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...virtualListRecipeDefaultVariants,
	...compact(variants),
});

export const virtualListRecipe = /* @__PURE__ */ Object.assign(
	virtualListRecipeFn,
	{
		__recipe__: false,
		__name__: "virtualListRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: virtualListRecipeVariantKeys,
		variantMap: {},
		splitVariantProps(props) {
			return splitProps(props, virtualListRecipeVariantKeys);
		},
		getVariantProps,
	},
);
