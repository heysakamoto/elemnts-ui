import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const tooltipRecipeDefaultVariants = {};
const tooltipRecipeCompoundVariants = [];

const tooltipRecipeSlotNames = [
	["content", "tooltip__content"],
	["trigger", "tooltip__trigger"],
	["arrow", "tooltip__arrow"],
	["arrowTip", "tooltip__arrowTip"],
	["positioner", "tooltip__positioner"],
];
const tooltipRecipeSlotFns = /* @__PURE__ */ tooltipRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			tooltipRecipeDefaultVariants,
			getSlotCompoundVariant(tooltipRecipeCompoundVariants, slotName),
		),
	],
);

const tooltipRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		tooltipRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const tooltipRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...tooltipRecipeDefaultVariants,
	...compact(variants),
});

export const tooltipRecipe = /* @__PURE__ */ Object.assign(tooltipRecipeFn, {
	__recipe__: false,
	__name__: "tooltipRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: tooltipRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, tooltipRecipeVariantKeys);
	},
	getVariantProps,
});
