import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const tocRecipeDefaultVariants = {};
const tocRecipeCompoundVariants = [];

const tocRecipeSlotNames = [
	["root", "toc__root"],
	["content", "toc__content"],
	["nav", "toc__nav"],
	["item", "toc__item"],
	["list", "toc__list"],
	["title", "toc__title"],
	["indicator", "toc__indicator"],
	["link", "toc__link"],
];
const tocRecipeSlotFns = /* @__PURE__ */ tocRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			tocRecipeDefaultVariants,
			getSlotCompoundVariant(tocRecipeCompoundVariants, slotName),
		),
	],
);

const tocRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		tocRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const tocRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...tocRecipeDefaultVariants,
	...compact(variants),
});

export const tocRecipe = /* @__PURE__ */ Object.assign(tocRecipeFn, {
	__recipe__: false,
	__name__: "tocRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: tocRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, tocRecipeVariantKeys);
	},
	getVariantProps,
});
