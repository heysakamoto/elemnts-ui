import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const collapsibleRecipeDefaultVariants = {}
const collapsibleRecipeCompoundVariants = []

const collapsibleRecipeSlotNames = [
  [
    "root",
    "collapsible__root"
  ],
  [
    "trigger",
    "collapsible__trigger"
  ],
  [
    "indicator",
    "collapsible__indicator"
  ],
  [
    "content",
    "collapsible__content"
  ]
]
const collapsibleRecipeSlotFns = /* @__PURE__ */ collapsibleRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, collapsibleRecipeDefaultVariants, getSlotCompoundVariant(collapsibleRecipeCompoundVariants, slotName))])

const collapsibleRecipeFn = memo((props = {}) => {
  return Object.fromEntries(collapsibleRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const collapsibleRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...collapsibleRecipeDefaultVariants, ...compact(variants) })

export const collapsibleRecipe = /* @__PURE__ */ Object.assign(collapsibleRecipeFn, {
  __recipe__: false,
  __name__: 'collapsibleRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: collapsibleRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, collapsibleRecipeVariantKeys)
  },
  getVariantProps
})