import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const anchorRecipeFn = /* @__PURE__ */ createRecipe(
	"anchor",
	{
		variant: "primary",
	},
	[],
);

const anchorRecipeVariantMap = {
	variant: ["primary", "secondary", "tertiary"],
};

const anchorRecipeVariantKeys = Object.keys(anchorRecipeVariantMap);

export const anchorRecipe = /* @__PURE__ */ Object.assign(
	memo(anchorRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "anchorRecipe",
		__getCompoundVariantCss__: anchorRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: anchorRecipeVariantKeys,
		variantMap: anchorRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, anchorRecipeVariantKeys);
		},
		getVariantProps: anchorRecipeFn.getVariantProps,
	},
);
