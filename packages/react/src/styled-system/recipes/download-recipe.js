import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const downloadRecipeFn = /* @__PURE__ */ createRecipe("download", {}, []);

const downloadRecipeVariantMap = {};

const downloadRecipeVariantKeys = Object.keys(downloadRecipeVariantMap);

export const downloadRecipe = /* @__PURE__ */ Object.assign(
	memo(downloadRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "downloadRecipe",
		__getCompoundVariantCss__: downloadRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: downloadRecipeVariantKeys,
		variantMap: downloadRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, downloadRecipeVariantKeys);
		},
		getVariantProps: downloadRecipeFn.getVariantProps,
	},
);
