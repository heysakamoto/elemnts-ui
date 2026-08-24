import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const timerRecipeDefaultVariants = {}
const timerRecipeCompoundVariants = []

const timerRecipeSlotNames = [
  [
    "root",
    "timer__root"
  ],
  [
    "control",
    "timer__control"
  ],
  [
    "area",
    "timer__area"
  ],
  [
    "item",
    "timer__item"
  ],
  [
    "itemLabel",
    "timer__itemLabel"
  ],
  [
    "itemGroup",
    "timer__itemGroup"
  ],
  [
    "separator",
    "timer__separator"
  ],
  [
    "actionTrigger",
    "timer__actionTrigger"
  ]
]
const timerRecipeSlotFns = /* @__PURE__ */ timerRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, timerRecipeDefaultVariants, getSlotCompoundVariant(timerRecipeCompoundVariants, slotName))])

const timerRecipeFn = memo((props = {}) => {
  return Object.fromEntries(timerRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const timerRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...timerRecipeDefaultVariants, ...compact(variants) })

export const timerRecipe = /* @__PURE__ */ Object.assign(timerRecipeFn, {
  __recipe__: false,
  __name__: 'timerRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: timerRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, timerRecipeVariantKeys)
  },
  getVariantProps
})