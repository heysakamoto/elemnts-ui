import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const sidebarRecipeDefaultVariants = {};
const sidebarRecipeCompoundVariants = [];

const sidebarRecipeSlotNames = [
	["root", "sidebar__root"],
	["header", "sidebar__header"],
	["addon", "sidebar__addon"],
	["nav", "sidebar__nav"],
	["list", "sidebar__list"],
	["group", "sidebar__group"],
	["item", "sidebar__item"],
	["trigger", "sidebar__trigger"],
	["label", "sidebar__label"],
];
const sidebarRecipeSlotFns = /* @__PURE__ */ sidebarRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			sidebarRecipeDefaultVariants,
			getSlotCompoundVariant(sidebarRecipeCompoundVariants, slotName),
		),
	],
);

const sidebarRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		sidebarRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const sidebarRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...sidebarRecipeDefaultVariants,
	...compact(variants),
});

export const sidebarRecipe = /* @__PURE__ */ Object.assign(sidebarRecipeFn, {
	__recipe__: false,
	__name__: "sidebarRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: sidebarRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, sidebarRecipeVariantKeys);
	},
	getVariantProps,
});
