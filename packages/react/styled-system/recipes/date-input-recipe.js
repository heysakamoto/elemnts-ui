import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const dateInputRecipeDefaultVariants = {
  "variant": "primary"
}
const dateInputRecipeCompoundVariants = []

const dateInputRecipeSlotNames = [
  [
    "root",
    "date-input__root"
  ],
  [
    "control",
    "date-input__control"
  ],
  [
    "label",
    "date-input__label"
  ],
  [
    "segment",
    "date-input__segment"
  ],
  [
    "segmentGroup",
    "date-input__segmentGroup"
  ],
  [
    "hiddenInput",
    "date-input__hiddenInput"
  ]
]
const dateInputRecipeSlotFns = /* @__PURE__ */ dateInputRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, dateInputRecipeDefaultVariants, getSlotCompoundVariant(dateInputRecipeCompoundVariants, slotName))])

const dateInputRecipeFn = memo((props = {}) => {
  return Object.fromEntries(dateInputRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const dateInputRecipeVariantKeys = [
  "variant"
]
const getVariantProps = (variants) => ({ ...dateInputRecipeDefaultVariants, ...compact(variants) })

export const dateInputRecipe = /* @__PURE__ */ Object.assign(dateInputRecipeFn, {
  __recipe__: false,
  __name__: 'dateInputRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: dateInputRecipeVariantKeys,
  variantMap: {
  "variant": [
    "primary",
    "secondary",
    "tertiary"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, dateInputRecipeVariantKeys)
  },
  getVariantProps
})