import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const statRecipeDefaultVariants = {};
const statRecipeCompoundVariants = [];

const statRecipeSlotNames = [
	["root", "stat__root"],
	["label", "stat__label"],
	["valueText", "stat__valueText"],
	["helpText", "stat__helpText"],
	["valueUnit", "stat__valueUnit"],
	["indicator", "stat__indicator"],
];
const statRecipeSlotFns = /* @__PURE__ */ statRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			statRecipeDefaultVariants,
			getSlotCompoundVariant(statRecipeCompoundVariants, slotName),
		),
	],
);

const statRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		statRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const statRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...statRecipeDefaultVariants,
	...compact(variants),
});

export const statRecipe = /* @__PURE__ */ Object.assign(statRecipeFn, {
	__recipe__: false,
	__name__: "statRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: statRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, statRecipeVariantKeys);
	},
	getVariantProps,
});
