import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const numberInputRecipeDefaultVariants = {}
const numberInputRecipeCompoundVariants = []

const numberInputRecipeSlotNames = [
  [
    "root",
    "number-input__root"
  ],
  [
    "label",
    "number-input__label"
  ],
  [
    "input",
    "number-input__input"
  ],
  [
    "control",
    "number-input__control"
  ],
  [
    "valueText",
    "number-input__valueText"
  ],
  [
    "incrementTrigger",
    "number-input__incrementTrigger"
  ],
  [
    "decrementTrigger",
    "number-input__decrementTrigger"
  ],
  [
    "scrubber",
    "number-input__scrubber"
  ]
]
const numberInputRecipeSlotFns = /* @__PURE__ */ numberInputRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, numberInputRecipeDefaultVariants, getSlotCompoundVariant(numberInputRecipeCompoundVariants, slotName))])

const numberInputRecipeFn = memo((props = {}) => {
  return Object.fromEntries(numberInputRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const numberInputRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...numberInputRecipeDefaultVariants, ...compact(variants) })

export const numberInputRecipe = /* @__PURE__ */ Object.assign(numberInputRecipeFn, {
  __recipe__: false,
  __name__: 'numberInputRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: numberInputRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, numberInputRecipeVariantKeys)
  },
  getVariantProps
})