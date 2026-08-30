import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const imageRecipeFn = /* @__PURE__ */ createRecipe("img", {}, []);

const imageRecipeVariantMap = {};

const imageRecipeVariantKeys = Object.keys(imageRecipeVariantMap);

export const imageRecipe = /* @__PURE__ */ Object.assign(
	memo(imageRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "imageRecipe",
		__getCompoundVariantCss__: imageRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: imageRecipeVariantKeys,
		variantMap: imageRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, imageRecipeVariantKeys);
		},
		getVariantProps: imageRecipeFn.getVariantProps,
	},
);
