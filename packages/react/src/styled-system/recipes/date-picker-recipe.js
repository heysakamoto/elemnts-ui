import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const datePickerRecipeDefaultVariants = {}
const datePickerRecipeCompoundVariants = []

const datePickerRecipeSlotNames = [
  [
    "root",
    "date-picker__root"
  ],
  [
    "trigger",
    "date-picker__trigger"
  ],
  [
    "content",
    "date-picker__content"
  ],
  [
    "control",
    "date-picker__control"
  ],
  [
    "label",
    "date-picker__label"
  ],
  [
    "positioner",
    "date-picker__positioner"
  ],
  [
    "input",
    "date-picker__input"
  ],
  [
    "clearTrigger",
    "date-picker__clearTrigger"
  ],
  [
    "table",
    "date-picker__table"
  ],
  [
    "nextTrigger",
    "date-picker__nextTrigger"
  ],
  [
    "prevTrigger",
    "date-picker__prevTrigger"
  ],
  [
    "view",
    "date-picker__view"
  ],
  [
    "monthSelect",
    "date-picker__monthSelect"
  ],
  [
    "rangeText",
    "date-picker__rangeText"
  ],
  [
    "tableBody",
    "date-picker__tableBody"
  ],
  [
    "tableCell",
    "date-picker__tableCell"
  ],
  [
    "tableCellTrigger",
    "date-picker__tableCellTrigger"
  ],
  [
    "tableHead",
    "date-picker__tableHead"
  ],
  [
    "tableHeader",
    "date-picker__tableHeader"
  ],
  [
    "tableRow",
    "date-picker__tableRow"
  ],
  [
    "viewTrigger",
    "date-picker__viewTrigger"
  ],
  [
    "viewControl",
    "date-picker__viewControl"
  ],
  [
    "yearSelect",
    "date-picker__yearSelect"
  ],
  [
    "presetTrigger",
    "date-picker__presetTrigger"
  ]
]
const datePickerRecipeSlotFns = /* @__PURE__ */ datePickerRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, datePickerRecipeDefaultVariants, getSlotCompoundVariant(datePickerRecipeCompoundVariants, slotName))])

const datePickerRecipeFn = memo((props = {}) => {
  return Object.fromEntries(datePickerRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const datePickerRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...datePickerRecipeDefaultVariants, ...compact(variants) })

export const datePickerRecipe = /* @__PURE__ */ Object.assign(datePickerRecipeFn, {
  __recipe__: false,
  __name__: 'datePickerRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: datePickerRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, datePickerRecipeVariantKeys)
  },
  getVariantProps
})