import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const inputGroupRecipeDefaultVariants = {
	size: "md",
	variant: "primary",
};
const inputGroupRecipeCompoundVariants = [];

const inputGroupRecipeSlotNames = [
	["textarea", "input-group__textarea"],
	["root", "input-group__root"],
	["addon", "input-group__addon"],
	["input", "input-group__input"],
];
const inputGroupRecipeSlotFns = /* @__PURE__ */ inputGroupRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			inputGroupRecipeDefaultVariants,
			getSlotCompoundVariant(inputGroupRecipeCompoundVariants, slotName),
		),
	],
);

const inputGroupRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		inputGroupRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const inputGroupRecipeVariantKeys = ["size", "variant"];
const getVariantProps = (variants) => ({
	...inputGroupRecipeDefaultVariants,
	...compact(variants),
});

export const inputGroupRecipe = /* @__PURE__ */ Object.assign(
	inputGroupRecipeFn,
	{
		__recipe__: false,
		__name__: "inputGroupRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: inputGroupRecipeVariantKeys,
		variantMap: {
			size: ["xs", "sm", "md", "lg", "xl"],
			variant: ["primary", "secondary", "tertiary"],
		},
		splitVariantProps(props) {
			return splitProps(props, inputGroupRecipeVariantKeys);
		},
		getVariantProps,
	},
);
