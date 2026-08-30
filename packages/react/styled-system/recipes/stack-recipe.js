import { memo, splitProps } from "../helpers.js";
import { createRecipe, mergeRecipes } from "./create-recipe.js";

const stackRecipeFn = /* @__PURE__ */ createRecipe(
	"stack",
	{
		inline: false,
	},
	[],
);

const stackRecipeVariantMap = {
	inline: ["true"],
};

const stackRecipeVariantKeys = Object.keys(stackRecipeVariantMap);

export const stackRecipe = /* @__PURE__ */ Object.assign(
	memo(stackRecipeFn.recipeFn),
	{
		__recipe__: true,
		__name__: "stackRecipe",
		__getCompoundVariantCss__: stackRecipeFn.__getCompoundVariantCss__,
		raw: (props) => props,
		variantKeys: stackRecipeVariantKeys,
		variantMap: stackRecipeVariantMap,
		merge(recipe) {
			return mergeRecipes(this, recipe);
		},
		splitVariantProps(props) {
			return splitProps(props, stackRecipeVariantKeys);
		},
		getVariantProps: stackRecipeFn.getVariantProps,
	},
);
