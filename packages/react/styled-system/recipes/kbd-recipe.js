import { memo, splitProps } from '../helpers.js';
import { createRecipe, mergeRecipes } from './create-recipe.js';

const kbdRecipeFn = /* @__PURE__ */ createRecipe('kbd', {
  "size": "md",
  "iconOnly": false,
  "variant": "primary"
}, [])

const kbdRecipeVariantMap = {
  "size": [
    "2xs",
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
    "ghost",
    "surface"
  ],
  "iconOnly": [
    "true"
  ]
}

const kbdRecipeVariantKeys = Object.keys(kbdRecipeVariantMap)

export const kbdRecipe = /* @__PURE__ */ Object.assign(memo(kbdRecipeFn.recipeFn), {
  __recipe__: true,
  __name__: 'kbdRecipe',
  __getCompoundVariantCss__: kbdRecipeFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: kbdRecipeVariantKeys,
  variantMap: kbdRecipeVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, kbdRecipeVariantKeys)
  },
  getVariantProps: kbdRecipeFn.getVariantProps,
})