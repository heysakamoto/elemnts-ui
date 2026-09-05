import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const skipNavRecipeDefaultVariants = {}
const skipNavRecipeCompoundVariants = []

const skipNavRecipeSlotNames = [
  [
    "root",
    "__root"
  ],
  [
    "link",
    "__link"
  ],
  [
    "content",
    "__content"
  ]
]
const skipNavRecipeSlotFns = /* @__PURE__ */ skipNavRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, skipNavRecipeDefaultVariants, getSlotCompoundVariant(skipNavRecipeCompoundVariants, slotName))])

const skipNavRecipeFn = memo((props = {}) => {
  return Object.fromEntries(skipNavRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const skipNavRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...skipNavRecipeDefaultVariants, ...compact(variants) })

export const skipNavRecipe = /* @__PURE__ */ Object.assign(skipNavRecipeFn, {
  __recipe__: false,
  __name__: 'skipNavRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: skipNavRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, skipNavRecipeVariantKeys)
  },
  getVariantProps
})