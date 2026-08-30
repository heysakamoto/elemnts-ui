import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const treeViewRecipeDefaultVariants = {};
const treeViewRecipeCompoundVariants = [];

const treeViewRecipeSlotNames = [
	["root", "tree-view__root"],
	["label", "tree-view__label"],
	["tree", "tree-view__tree"],
	["item", "tree-view__item"],
	["itemIndicator", "tree-view__itemIndicator"],
	["itemText", "tree-view__itemText"],
	["branch", "tree-view__branch"],
	["branchControl", "tree-view__branchControl"],
	["branchTrigger", "tree-view__branchTrigger"],
	["branchContent", "tree-view__branchContent"],
	["branchText", "tree-view__branchText"],
	["branchIndicator", "tree-view__branchIndicator"],
	["branchIndentGuide", "tree-view__branchIndentGuide"],
	["nodeRenameInput", "tree-view__nodeRenameInput"],
	["nodeCheckbox", "tree-view__nodeCheckbox"],
];
const treeViewRecipeSlotFns = /* @__PURE__ */ treeViewRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			treeViewRecipeDefaultVariants,
			getSlotCompoundVariant(treeViewRecipeCompoundVariants, slotName),
		),
	],
);

const treeViewRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		treeViewRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const treeViewRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...treeViewRecipeDefaultVariants,
	...compact(variants),
});

export const treeViewRecipe = /* @__PURE__ */ Object.assign(treeViewRecipeFn, {
	__recipe__: false,
	__name__: "treeViewRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: treeViewRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, treeViewRecipeVariantKeys);
	},
	getVariantProps,
});
