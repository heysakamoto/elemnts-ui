import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const fieldRecipeDefaultVariants = {};
const fieldRecipeCompoundVariants = [];

const fieldRecipeSlotNames = [
	["root", "field__root"],
	["input", "field__input"],
	["label", "field__label"],
	["textarea", "field__textarea"],
	["errorText", "field__errorText"],
	["helperText", "field__helperText"],
	["select", "field__select"],
	["requiredIndicator", "field__requiredIndicator"],
];
const fieldRecipeSlotFns = /* @__PURE__ */ fieldRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			fieldRecipeDefaultVariants,
			getSlotCompoundVariant(fieldRecipeCompoundVariants, slotName),
		),
	],
);

const fieldRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		fieldRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const fieldRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...fieldRecipeDefaultVariants,
	...compact(variants),
});

export const fieldRecipe = /* @__PURE__ */ Object.assign(fieldRecipeFn, {
	__recipe__: false,
	__name__: "fieldRecipe",
	raw: (props) => props,
	classNameMap: {},
	variantKeys: fieldRecipeVariantKeys,
	variantMap: {},
	splitVariantProps(props) {
		return splitProps(props, fieldRecipeVariantKeys);
	},
	getVariantProps,
});
