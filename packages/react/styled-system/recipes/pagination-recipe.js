import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const paginationRecipeDefaultVariants = {}
const paginationRecipeCompoundVariants = []

const paginationRecipeSlotNames = [
  [
    "root",
    "pagination__root"
  ],
  [
    "ellipsis",
    "pagination__ellipsis"
  ],
  [
    "item",
    "pagination__item"
  ],
  [
    "prevTrigger",
    "pagination__prevTrigger"
  ],
  [
    "nextTrigger",
    "pagination__nextTrigger"
  ],
  [
    "firstTrigger",
    "pagination__firstTrigger"
  ],
  [
    "lastTrigger",
    "pagination__lastTrigger"
  ]
]
const paginationRecipeSlotFns = /* @__PURE__ */ paginationRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, paginationRecipeDefaultVariants, getSlotCompoundVariant(paginationRecipeCompoundVariants, slotName))])

const paginationRecipeFn = memo((props = {}) => {
  return Object.fromEntries(paginationRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const paginationRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...paginationRecipeDefaultVariants, ...compact(variants) })

export const paginationRecipe = /* @__PURE__ */ Object.assign(paginationRecipeFn, {
  __recipe__: false,
  __name__: 'paginationRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: paginationRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, paginationRecipeVariantKeys)
  },
  getVariantProps
})