import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const comboboxRecipeDefaultVariants = {}
const comboboxRecipeCompoundVariants = []

const comboboxRecipeSlotNames = [
  [
    "root",
    "combobox__root"
  ],
  [
    "trigger",
    "combobox__trigger"
  ],
  [
    "content",
    "combobox__content"
  ],
  [
    "control",
    "combobox__control"
  ],
  [
    "label",
    "combobox__label"
  ],
  [
    "positioner",
    "combobox__positioner"
  ],
  [
    "input",
    "combobox__input"
  ],
  [
    "item",
    "combobox__item"
  ],
  [
    "list",
    "combobox__list"
  ],
  [
    "clearTrigger",
    "combobox__clearTrigger"
  ],
  [
    "itemGroup",
    "combobox__itemGroup"
  ],
  [
    "itemGroupLabel",
    "combobox__itemGroupLabel"
  ],
  [
    "itemIndicator",
    "combobox__itemIndicator"
  ],
  [
    "itemText",
    "combobox__itemText"
  ],
  [
    "empty",
    "combobox__empty"
  ],
  [
    "indicatorGroup",
    "combobox__indicatorGroup"
  ]
]
const comboboxRecipeSlotFns = /* @__PURE__ */ comboboxRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, comboboxRecipeDefaultVariants, getSlotCompoundVariant(comboboxRecipeCompoundVariants, slotName))])

const comboboxRecipeFn = memo((props = {}) => {
  return Object.fromEntries(comboboxRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const comboboxRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...comboboxRecipeDefaultVariants, ...compact(variants) })

export const comboboxRecipe = /* @__PURE__ */ Object.assign(comboboxRecipeFn, {
  __recipe__: false,
  __name__: 'comboboxRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: comboboxRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, comboboxRecipeVariantKeys)
  },
  getVariantProps
})