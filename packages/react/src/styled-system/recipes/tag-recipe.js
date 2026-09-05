import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const tagRecipeFn = /* @__PURE__ */ createRecipe('tag', {
  "size": "md",
  "iconOnly": false,
  "variant": "primary"
}, [])

const tagRecipeVariantMap = {
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
    "surface"
  ],
  "iconOnly": [
    "true"
  ]
}

const tagRecipeVariantKeys = Object.keys(tagRecipeVariantMap)

export const tagRecipe = /* @__PURE__ */ Object.assign(memo(tagRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'tagRecipe',
  __getCompoundVariantCss__: tagRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: tagRecipeVariantKeys,
  variantMap: tagRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, tagRecipeVariantKeys)
  },
  getVariantProps: tagRecipeFn.getVariantProps,
})