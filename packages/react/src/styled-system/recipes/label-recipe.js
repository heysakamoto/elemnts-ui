import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const labelRecipeFn = /* @__PURE__ */ createRecipe('label', {}, [])

const labelRecipeVariantMap = {}

const labelRecipeVariantKeys = Object.keys(labelRecipeVariantMap)

export const labelRecipe = /* @__PURE__ */ Object.assign(memo(labelRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'labelRecipe',
  __getCompoundVariantCss__: labelRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: labelRecipeVariantKeys,
  variantMap: labelRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, labelRecipeVariantKeys)
  },
  getVariantProps: labelRecipeFn.getVariantProps,
})