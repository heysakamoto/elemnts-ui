import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const gridRecipeFn = /* @__PURE__ */ createRecipe('grid', {
  "inline": false
}, [])

const gridRecipeVariantMap = {
  "inline": [
    "true"
  ]
}

const gridRecipeVariantKeys = Object.keys(gridRecipeVariantMap)

export const gridRecipe = /* @__PURE__ */ Object.assign(memo(gridRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'gridRecipe',
  __getCompoundVariantCss__: gridRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: gridRecipeVariantKeys,
  variantMap: gridRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, gridRecipeVariantKeys)
  },
  getVariantProps: gridRecipeFn.getVariantProps,
})