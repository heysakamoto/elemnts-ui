import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const fieldsetRecipeDefaultVariants = {};
const fieldsetRecipeCompoundVariants = [];

const fieldsetRecipeSlotNames = [
	["root", "fieldset__root"],
	["errorText", "fieldset__errorText"],
	["helperText", "fieldset__helperText"],
	["legend", "fieldset__legend"],
];
const fieldsetRecipeSlotFns = /* @__PURE__ */ fieldsetRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			fieldsetRecipeDefaultVariants,
			getSlotCompoundVariant(fieldsetRecipeCompoundVariants, slotName),
		),
	],
);

const fieldsetRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		fieldsetRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const fieldsetRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...fieldsetRecipeDefaultVariants,
	...compact(variants),
});

export const fieldsetRecipe = /* @__PURE__ */ Object.assign(fieldsetRecipeFn, {
	__recipe__: false,
	__name__: "fieldsetRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: fieldsetRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, fieldsetRecipeVariantKeys);
	},
	getVariantProps,
});
