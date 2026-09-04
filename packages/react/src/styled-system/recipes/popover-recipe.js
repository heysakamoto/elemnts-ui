import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const popoverRecipeDefaultVariants = {};
const popoverRecipeCompoundVariants = [];

const popoverRecipeSlotNames = [
	["content", "popover__content"],
	["trigger", "popover__trigger"],
	["title", "popover__title"],
	["description", "popover__description"],
	["indicator", "popover__indicator"],
	["anchor", "popover__anchor"],
	["arrow", "popover__arrow"],
	["arrowTip", "popover__arrowTip"],
	["positioner", "popover__positioner"],
	["closeTrigger", "popover__closeTrigger"],
];
const popoverRecipeSlotFns = /* @__PURE__ */ popoverRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			popoverRecipeDefaultVariants,
			getSlotCompoundVariant(popoverRecipeCompoundVariants, slotName),
		),
	],
);

const popoverRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		popoverRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const popoverRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...popoverRecipeDefaultVariants,
	...compact(variants),
});

export const popoverRecipe = /* @__PURE__ */ Object.assign(popoverRecipeFn, {
	__recipe__: false,
	__name__: "popoverRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: popoverRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, popoverRecipeVariantKeys);
	},
	getVariantProps,
});
