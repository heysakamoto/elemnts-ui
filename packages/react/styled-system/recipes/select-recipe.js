import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const selectRecipeDefaultVariants = {}
const selectRecipeCompoundVariants = []

const selectRecipeSlotNames = [
  [
    "root",
    "select__root"
  ],
  [
    "label",
    "select__label"
  ],
  [
    "item",
    "select__item"
  ],
  [
    "indicator",
    "select__indicator"
  ],
  [
    "itemText",
    "select__itemText"
  ],
  [
    "content",
    "select__content"
  ],
  [
    "list",
    "select__list"
  ],
  [
    "positioner",
    "select__positioner"
  ],
  [
    "trigger",
    "select__trigger"
  ],
  [
    "clearTrigger",
    "select__clearTrigger"
  ],
  [
    "itemIndicator",
    "select__itemIndicator"
  ],
  [
    "itemGroup",
    "select__itemGroup"
  ],
  [
    "itemGroupLabel",
    "select__itemGroupLabel"
  ],
  [
    "control",
    "select__control"
  ],
  [
    "hiddenSelect",
    "select__hiddenSelect"
  ],
  [
    "valueText",
    "select__valueText"
  ]
]
const selectRecipeSlotFns = /* @__PURE__ */ selectRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, selectRecipeDefaultVariants, getSlotCompoundVariant(selectRecipeCompoundVariants, slotName))])

const selectRecipeFn = memo((props = {}) => {
  return Object.fromEntries(selectRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const selectRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...selectRecipeDefaultVariants, ...compact(variants) })

export const selectRecipe = /* @__PURE__ */ Object.assign(selectRecipeFn, {
  __recipe__: false,
  __name__: 'selectRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: selectRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, selectRecipeVariantKeys)
  },
  getVariantProps
})