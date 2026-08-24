import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const swapRecipeDefaultVariants = {}
const swapRecipeCompoundVariants = []

const swapRecipeSlotNames = [
  [
    "root",
    "swap__root"
  ],
  [
    "indicator",
    "swap__indicator"
  ]
]
const swapRecipeSlotFns = /* @__PURE__ */ swapRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, swapRecipeDefaultVariants, getSlotCompoundVariant(swapRecipeCompoundVariants, slotName))])

const swapRecipeFn = memo((props = {}) => {
  return Object.fromEntries(swapRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const swapRecipeVariantKeys = [
  "mode"
]
const getVariantProps = (variants) => ({ ...swapRecipeDefaultVariants, ...compact(variants) })

export const swapRecipe = /* @__PURE__ */ Object.assign(swapRecipeFn, {
  __recipe__: false,
  __name__: 'swapRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: swapRecipeVariantKeys,
  variantMap: {
  "mode": [
    "fade",
    "flip",
    "scale",
    "rotate"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, swapRecipeVariantKeys)
  },
  getVariantProps
})