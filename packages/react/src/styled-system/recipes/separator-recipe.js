import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const separatorRecipeFn = /* @__PURE__ */ createRecipe('separator', {
  "size": "xs",
  "variant": "primary"
}, [])

const separatorRecipeVariantMap = {
  "orientation": [
    "horizontal",
    "vertical"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ],
  "variant": [
    "primary",
    "secondary",
    "tertiary",
    "ghost"
  ]
}

const separatorRecipeVariantKeys = Object.keys(separatorRecipeVariantMap)

export const separatorRecipe = /* @__PURE__ */ Object.assign(memo(separatorRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'separatorRecipe',
  __getCompoundVariantCss__: separatorRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: separatorRecipeVariantKeys,
  variantMap: separatorRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, separatorRecipeVariantKeys)
  },
  getVariantProps: separatorRecipeFn.getVariantProps,
})