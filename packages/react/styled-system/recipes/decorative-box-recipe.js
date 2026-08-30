import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const decorativeBoxRecipeFn = /* @__PURE__ */ createRecipe(
	"decorative-box",
	{
		variant: "primary",
	},
	[],
);

const decorativeBoxRecipeVariantMap = {
	variant: ["secondary", "primary"],
};

const decorativeBoxRecipeVariantKeys = Object.keys(
	decorativeBoxRecipeVariantMap,
);

export const decorativeBoxRecipe = /* @__PURE__ */ Object.assign(
	memo(decorativeBoxRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "decorativeBoxRecipe",
		__getCompoundVariantCss__: decorativeBoxRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: decorativeBoxRecipeVariantKeys,
		variantMap: decorativeBoxRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, decorativeBoxRecipeVariantKeys);
		},
		getVariantProps: decorativeBoxRecipeFn.getVariantProps,
	},
);
