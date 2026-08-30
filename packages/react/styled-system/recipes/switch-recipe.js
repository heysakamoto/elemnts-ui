import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const switchRecipeDefaultVariants = {
	size: "md",
};
const switchRecipeCompoundVariants = [];

const switchRecipeSlotNames = [
	["root", "switch__root"],
	["control", "switch__control"],
	["label", "switch__label"],
	["thumb", "switch__thumb"],
];
const switchRecipeSlotFns = /* @__PURE__ */ switchRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			switchRecipeDefaultVariants,
			getSlotCompoundVariant(switchRecipeCompoundVariants, slotName),
		),
	],
);

const switchRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		switchRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const switchRecipeVariantKeys = ["size"];
const getVariantProps = (variants) => ({
	...switchRecipeDefaultVariants,
	...compact(variants),
});

export const switchRecipe = /* @__PURE__ */ Object.assign(switchRecipeFn, {
	__recipe__: false,
	__name__: "switchRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: switchRecipeVariantKeys,
	variantMap: {
		size: ["xs", "sm", "md", "lg", "xl"],
	},
	splitVariantProps(props) {
		return splitProps(props, switchRecipeVariantKeys);
	},
	getVariantProps,
});
