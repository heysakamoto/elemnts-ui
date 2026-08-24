import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const highlightRecipeFn = /* @__PURE__ */ createRecipe('highlight', {
  "variant": "primary"
}, [])

const highlightRecipeVariantMap = {
  "variant": [
    "primary",
    "secondary",
    "tertiary",
    "underline"
  ]
}

const highlightRecipeVariantKeys = Object.keys(highlightRecipeVariantMap)

export const highlightRecipe = /* @__PURE__ */ Object.assign(memo(highlightRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'highlightRecipe',
  __getCompoundVariantCss__: highlightRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: highlightRecipeVariantKeys,
  variantMap: highlightRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, highlightRecipeVariantKeys)
  },
  getVariantProps: highlightRecipeFn.getVariantProps,
})