import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const containerRecipeFn = /* @__PURE__ */ createRecipe('container', {
  "fluid": false
}, [])

const containerRecipeVariantMap = {
  "fluid": [
    "true"
  ]
}

const containerRecipeVariantKeys = Object.keys(containerRecipeVariantMap)

export const containerRecipe = /* @__PURE__ */ Object.assign(memo(containerRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'containerRecipe',
  __getCompoundVariantCss__: containerRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: containerRecipeVariantKeys,
  variantMap: containerRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, containerRecipeVariantKeys)
  },
  getVariantProps: containerRecipeFn.getVariantProps,
})