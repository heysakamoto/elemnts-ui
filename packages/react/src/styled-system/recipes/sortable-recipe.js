import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const sortableRecipeDefaultVariants = {}
const sortableRecipeCompoundVariants = []

const sortableRecipeSlotNames = [
  [
    "root",
    "sortable__root"
  ],
  [
    "itemHandle",
    "sortable__itemHandle"
  ],
  [
    "item",
    "sortable__item"
  ]
]
const sortableRecipeSlotFns = /* @__PURE__ */ sortableRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, sortableRecipeDefaultVariants, getSlotCompoundVariant(sortableRecipeCompoundVariants, slotName))])

const sortableRecipeFn = memo((props = {}) => {
  return Object.fromEntries(sortableRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const sortableRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...sortableRecipeDefaultVariants, ...compact(variants) })

export const sortableRecipe = /* @__PURE__ */ Object.assign(sortableRecipeFn, {
  __recipe__: false,
  __name__: 'sortableRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: sortableRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, sortableRecipeVariantKeys)
  },
  getVariantProps
})