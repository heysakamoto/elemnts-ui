import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const boxRecipeFn = /* @__PURE__ */ createRecipe("box", {}, []);

const boxRecipeVariantMap = {};

const boxRecipeVariantKeys = Object.keys(boxRecipeVariantMap);

export const boxRecipe = /* @__PURE__ */ Object.assign(
	memo(boxRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "boxRecipe",
		__getCompoundVariantCss__: boxRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: boxRecipeVariantKeys,
		variantMap: boxRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, boxRecipeVariantKeys);
		},
		getVariantProps: boxRecipeFn.getVariantProps,
	},
);
