import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const pinInputRecipeDefaultVariants = {}
const pinInputRecipeCompoundVariants = []

const pinInputRecipeSlotNames = [
  [
    "root",
    "pinInput__root"
  ],
  [
    "control",
    "pinInput__control"
  ],
  [
    "label",
    "pinInput__label"
  ],
  [
    "input",
    "pinInput__input"
  ]
]
const pinInputRecipeSlotFns = /* @__PURE__ */ pinInputRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, pinInputRecipeDefaultVariants, getSlotCompoundVariant(pinInputRecipeCompoundVariants, slotName))])

const pinInputRecipeFn = memo((props = {}) => {
  return Object.fromEntries(pinInputRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const pinInputRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...pinInputRecipeDefaultVariants, ...compact(variants) })

export const pinInputRecipe = /* @__PURE__ */ Object.assign(pinInputRecipeFn, {
  __recipe__: false,
  __name__: 'pinInputRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: pinInputRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, pinInputRecipeVariantKeys)
  },
  getVariantProps
})