import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const blockquoteRecipeDefaultVariants = {};
const blockquoteRecipeCompoundVariants = [];

const blockquoteRecipeSlotNames = [
	["root", "blockquote__root"],
	["cite", "blockquote__cite"],
	["caption", "blockquote__caption"],
	["indicator", "blockquote__indicator"],
	["content", "blockquote__content"],
];
const blockquoteRecipeSlotFns = /* @__PURE__ */ blockquoteRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			blockquoteRecipeDefaultVariants,
			getSlotCompoundVariant(blockquoteRecipeCompoundVariants, slotName),
		),
	],
);

const blockquoteRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		blockquoteRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const blockquoteRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...blockquoteRecipeDefaultVariants,
	...compact(variants),
});

export const blockquoteRecipe = /* @__PURE__ */ Object.assign(
	blockquoteRecipeFn,
	{
		__recipe__: false,
		__name__: "blockquoteRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: blockquoteRecipeVariantKeys,
		variantMap: {},
		splitVariantProps(props) {
			return splitProps(props, blockquoteRecipeVariantKeys);
		},
		getVariantProps,
	},
);
