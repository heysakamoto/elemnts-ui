import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const clipboardRecipeDefaultVariants = {};
const clipboardRecipeCompoundVariants = [];

const clipboardRecipeSlotNames = [
	["root", "clipboard__root"],
	["trigger", "clipboard__trigger"],
	["indicator", "clipboard__indicator"],
	["control", "clipboard__control"],
	["label", "clipboard__label"],
	["input", "clipboard__input"],
	["valueText", "clipboard__valueText"],
];
const clipboardRecipeSlotFns = /* @__PURE__ */ clipboardRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			clipboardRecipeDefaultVariants,
			getSlotCompoundVariant(clipboardRecipeCompoundVariants, slotName),
		),
	],
);

const clipboardRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		clipboardRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const clipboardRecipeVariantKeys = [];
const getVariantProps = (variants) => ({
	...clipboardRecipeDefaultVariants,
	...compact(variants),
});

export const clipboardRecipe = /* @__PURE__ */ Object.assign(
	clipboardRecipeFn,
	{
		__recipe__: false,
		__name__: "clipboardRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: clipboardRecipeVariantKeys,
		variantMap: {},
		splitVariantProps(props) {
			return splitProps(props, clipboardRecipeVariantKeys);
		},
		getVariantProps,
	},
);
