import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const iconRecipeFn = /* @__PURE__ */ createRecipe('icon', {}, [])

const iconRecipeVariantMap = {}

const iconRecipeVariantKeys = Object.keys(iconRecipeVariantMap)

export const iconRecipe = /* @__PURE__ */ Object.assign(memo(iconRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'iconRecipe',
  __getCompoundVariantCss__: iconRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: iconRecipeVariantKeys,
  variantMap: iconRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, iconRecipeVariantKeys)
  },
  getVariantProps: iconRecipeFn.getVariantProps,
})