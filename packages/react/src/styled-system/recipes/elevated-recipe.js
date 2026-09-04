import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const elevatedRecipeFn = /* @__PURE__ */ createRecipe(
	"elevated",
	{
		withBorder: true,
	},
	[],
);

const elevatedRecipeVariantMap = {
	withBorder: ["false", "true"],
};

const elevatedRecipeVariantKeys = Object.keys(elevatedRecipeVariantMap);

export const elevatedRecipe = /* @__PURE__ */ Object.assign(
	memo(elevatedRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "elevatedRecipe",
		__getCompoundVariantCss__: elevatedRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: elevatedRecipeVariantKeys,
		variantMap: elevatedRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, elevatedRecipeVariantKeys);
		},
		getVariantProps: elevatedRecipeFn.getVariantProps,
	},
);
