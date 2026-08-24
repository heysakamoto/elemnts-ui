import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const ratingGroupRecipeDefaultVariants = {}
const ratingGroupRecipeCompoundVariants = []

const ratingGroupRecipeSlotNames = [
  [
    "root",
    "rating-group__root"
  ],
  [
    "control",
    "rating-group__control"
  ],
  [
    "label",
    "rating-group__label"
  ],
  [
    "item",
    "rating-group__item"
  ],
  [
    "itemIndicator",
    "rating-group__itemIndicator"
  ]
]
const ratingGroupRecipeSlotFns = /* @__PURE__ */ ratingGroupRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, ratingGroupRecipeDefaultVariants, getSlotCompoundVariant(ratingGroupRecipeCompoundVariants, slotName))])

const ratingGroupRecipeFn = memo((props = {}) => {
  return Object.fromEntries(ratingGroupRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const ratingGroupRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...ratingGroupRecipeDefaultVariants, ...compact(variants) })

export const ratingGroupRecipe = /* @__PURE__ */ Object.assign(ratingGroupRecipeFn, {
  __recipe__: false,
  __name__: 'ratingGroupRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: ratingGroupRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, ratingGroupRecipeVariantKeys)
  },
  getVariantProps
})