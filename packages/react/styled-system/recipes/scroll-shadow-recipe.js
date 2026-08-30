import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const scrollShadowRecipeFn = /* @__PURE__ */ createRecipe(
	"scroll-shadow",
	{
		isEnabled: true,
		hideScrollbar: true,
	},
	[],
);

const scrollShadowRecipeVariantMap = {
	hideScrollbar: ["true"],
	isEnabled: ["true"],
};

const scrollShadowRecipeVariantKeys = Object.keys(scrollShadowRecipeVariantMap);

export const scrollShadowRecipe = /* @__PURE__ */ Object.assign(
	memo(scrollShadowRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "scrollShadowRecipe",
		__getCompoundVariantCss__: scrollShadowRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: scrollShadowRecipeVariantKeys,
		variantMap: scrollShadowRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, scrollShadowRecipeVariantKeys);
		},
		getVariantProps: scrollShadowRecipeFn.getVariantProps,
	},
);
