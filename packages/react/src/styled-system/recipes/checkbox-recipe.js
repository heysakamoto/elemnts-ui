import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const checkboxRecipeDefaultVariants = {
	size: "md",
	variant: "primary",
};
const checkboxRecipeCompoundVariants = [];

const checkboxRecipeSlotNames = [
	["root", "checkbox__root"],
	["indicator", "checkbox__indicator"],
	["control", "checkbox__control"],
	["label", "checkbox__label"],
	["group", "checkbox__group"],
];
const checkboxRecipeSlotFns = /* @__PURE__ */ checkboxRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			checkboxRecipeDefaultVariants,
			getSlotCompoundVariant(checkboxRecipeCompoundVariants, slotName),
		),
	],
);

const checkboxRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		checkboxRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const checkboxRecipeVariantKeys = ["size", "variant"];
const getVariantProps = (variants) => ({
	...checkboxRecipeDefaultVariants,
	...compact(variants),
});

export const checkboxRecipe = /* @__PURE__ */ Object.assign(checkboxRecipeFn, {
	__recipe__: false,
	__name__: "checkboxRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: checkboxRecipeVariantKeys,
	variantMap: {
		size: ["xs", "sm", "md", "lg", "xl"],
		variant: ["primary", "secondary", "tertiary", "ghost"],
	},
	splitVariantProps(props) {
		return splitProps(props, checkboxRecipeVariantKeys);
	},
	getVariantProps,
});
