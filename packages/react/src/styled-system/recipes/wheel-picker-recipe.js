import {
	compact,
	getSlotCompoundVariant,
	memo,
	splitProps,
} from "../helpers.js";
import { createRecipe } from "./create-recipe.js";

const wheelPickerRecipeDefaultVariants = {
	variant: "primary",
};
const wheelPickerRecipeCompoundVariants = [];

const wheelPickerRecipeSlotNames = [["root", "wheel-picker__root"]];
const wheelPickerRecipeSlotFns = /* @__PURE__ */ wheelPickerRecipeSlotNames.map(
	([slotName, slotKey]) => [
		slotName,
		createRecipe(
			slotKey,
			wheelPickerRecipeDefaultVariants,
			getSlotCompoundVariant(wheelPickerRecipeCompoundVariants, slotName),
		),
	],
);

const wheelPickerRecipeFn = memo((props = {}) => {
	return Object.fromEntries(
		wheelPickerRecipeSlotFns.map(([slotName, slotFn]) => [
			slotName,
			slotFn.recipeFn(props),
		]),
	);
});

const wheelPickerRecipeVariantKeys = ["variant"];
const getVariantProps = (variants) => ({
	...wheelPickerRecipeDefaultVariants,
	...compact(variants),
});

export const wheelPickerRecipe = /* @__PURE__ */ Object.assign(
	wheelPickerRecipeFn,
	{
		__recipe__: false,
		__name__: "wheelPickerRecipe",
		raw: (props) => props,
		classNameMap: {},
		variantKeys: wheelPickerRecipeVariantKeys,
		variantMap: {
			variant: ["primary", "secondary"],
		},
		splitVariantProps(props) {
			return splitProps(props, wheelPickerRecipeVariantKeys);
		},
		getVariantProps,
	},
);
