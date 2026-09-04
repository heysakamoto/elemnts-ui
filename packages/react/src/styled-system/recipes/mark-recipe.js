import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const markRecipeFn = /* @__PURE__ */ createRecipe(
	"mark",
	{
		variant: "primary",
	},
	[],
);

const markRecipeVariantMap = {
	variant: ["primary", "secondary", "tertiary", "underline"],
};

const markRecipeVariantKeys = Object.keys(markRecipeVariantMap);

export const markRecipe = /* @__PURE__ */ Object.assign(
	memo(markRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "markRecipe",
		__getCompoundVariantCss__: markRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: markRecipeVariantKeys,
		variantMap: markRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, markRecipeVariantKeys);
		},
		getVariantProps: markRecipeFn.getVariantProps,
	},
);
