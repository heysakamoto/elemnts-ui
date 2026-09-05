import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const skeletonRecipeFn = /* @__PURE__ */ createRecipe('skeleton', {
  "effect": "pulse",
  "textOnly": false
}, [])

const skeletonRecipeVariantMap = {
  "textOnly": [
    "true"
  ],
  "effect": [
    "pulse",
    "shimmer"
  ]
}

const skeletonRecipeVariantKeys = Object.keys(skeletonRecipeVariantMap)

export const skeletonRecipe = /* @__PURE__ */ Object.assign(memo(skeletonRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'skeletonRecipe',
  __getCompoundVariantCss__: skeletonRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: skeletonRecipeVariantKeys,
  variantMap: skeletonRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, skeletonRecipeVariantKeys)
  },
  getVariantProps: skeletonRecipeFn.getVariantProps,
})