import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const swatchRecipeFn = /* @__PURE__ */ createRecipe('color-swatch', {
  "size": "md"
}, [])

const swatchRecipeVariantMap = {
  "size": [
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
}

const swatchRecipeVariantKeys = Object.keys(swatchRecipeVariantMap)

export const swatchRecipe = /* @__PURE__ */ Object.assign(memo(swatchRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'swatchRecipe',
  __getCompoundVariantCss__: swatchRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: swatchRecipeVariantKeys,
  variantMap: swatchRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, swatchRecipeVariantKeys)
  },
  getVariantProps: swatchRecipeFn.getVariantProps,
})