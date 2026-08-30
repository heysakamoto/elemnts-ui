import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const emptyStateRecipeDefaultVariants = {};
const emptyStateRecipeCompoundVariants = [];

const emptyStateRecipeSlotNames = [
	["root", "empty-state__root"],
	["content", "empty-state__content"],
	["title", "empty-state__title"],
	["description", "empty-state__description"],
	["indicator", "empty-state__indicator"],
	["control", "empty-state__control"],
];
const emptyStateRecipeSlotFns = /* @__PURE__ */ emptyStateRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			emptyStateRecipeDefaultVariants,
			getSlotCompoundVariant(emptyStateRecipeCompoundVariants, slotName),
		),
	],
);

const emptyStateRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		emptyStateRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const emptyStateRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...emptyStateRecipeDefaultVariants,
	...compact(variants),
});

export const emptyStateRecipe = /* @__PURE__ */ Object.assign(
	emptyStateRecipeFn,
	{
		__recipe__: false,
		__name__: "emptyStateRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: emptyStateRecipeVariantKeys,
		variantMap: {},
		splitVariantProps(props) {
			return splitProps(props, emptyStateRecipeVariantKeys);
		},
		getVariantProps,
	},
);
