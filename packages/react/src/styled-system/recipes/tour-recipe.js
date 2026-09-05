import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tourRecipeDefaultVariants = {}
const tourRecipeCompoundVariants = []

const tourRecipeSlotNames = [
  [
    "root",
    "tour__root"
  ],
  [
    "positioner",
    "tour__positioner"
  ],
  [
    "content",
    "tour__content"
  ],
  [
    "title",
    "tour__title"
  ],
  [
    "description",
    "tour__description"
  ],
  [
    "actionTrigger",
    "tour__actionTrigger"
  ],
  [
    "closeTrigger",
    "tour__closeTrigger"
  ],
  [
    "arrow",
    "tour__arrow"
  ],
  [
    "arrowTip",
    "tour__arrowTip"
  ],
  [
    "control",
    "tour__control"
  ],
  [
    "backdrop",
    "tour__backdrop"
  ],
  [
    "progressText",
    "tour__progressText"
  ],
  [
    "spotlight",
    "tour__spotlight"
  ]
]
const tourRecipeSlotFns = /* @__PURE__ */ tourRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tourRecipeDefaultVariants, getSlotCompoundVariant(tourRecipeCompoundVariants, slotName))])

const tourRecipeFn = memo((props = {}) => {
  return Object.fromEntries(tourRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const tourRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...tourRecipeDefaultVariants, ...compact(variants) })

export const tourRecipe = /* @__PURE__ */ Object.assign(tourRecipeFn, {
  __recipe__: false,
  __name__: 'tourRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tourRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, tourRecipeVariantKeys)
  },
  getVariantProps
})