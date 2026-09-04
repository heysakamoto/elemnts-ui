import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const focusTrapRecipeFn = /* @__PURE__ */ createRecipe("focus-trap", {}, []);

const focusTrapRecipeVariantMap = {};

const focusTrapRecipeVariantKeys = Object.keys(focusTrapRecipeVariantMap);

export const focusTrapRecipe = /* @__PURE__ */ Object.assign(
	memo(focusTrapRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "focusTrapRecipe",
		__getCompoundVariantCss__: focusTrapRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: focusTrapRecipeVariantKeys,
		variantMap: focusTrapRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, focusTrapRecipeVariantKeys);
		},
		getVariantProps: focusTrapRecipeFn.getVariantProps,
	},
);
