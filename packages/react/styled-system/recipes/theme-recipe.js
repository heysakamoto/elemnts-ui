import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const themeRecipeFn = /* @__PURE__ */ createRecipe('theme', {}, [])

const themeRecipeVariantMap = {}

const themeRecipeVariantKeys = Object.keys(themeRecipeVariantMap)

export const themeRecipe = /* @__PURE__ */ Object.assign(memo(themeRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'themeRecipe',
  __getCompoundVariantCss__: themeRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: themeRecipeVariantKeys,
  variantMap: themeRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, themeRecipeVariantKeys)
  },
  getVariantProps: themeRecipeFn.getVariantProps,
})