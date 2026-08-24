import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const listboxRecipeDefaultVariants = {}
const listboxRecipeCompoundVariants = []

const listboxRecipeSlotNames = [
  [
    "root",
    "listbox__root"
  ],
  [
    "label",
    "listbox__label"
  ],
  [
    "item",
    "listbox__item"
  ],
  [
    "input",
    "listbox__input"
  ],
  [
    "empty",
    "listbox__empty"
  ],
  [
    "content",
    "listbox__content"
  ],
  [
    "itemText",
    "listbox__itemText"
  ],
  [
    "itemGroup",
    "listbox__itemGroup"
  ],
  [
    "valueText",
    "listbox__valueText"
  ],
  [
    "itemIndicator",
    "listbox__itemIndicator"
  ],
  [
    "itemGroupLabel",
    "listbox__itemGroupLabel"
  ]
]
const listboxRecipeSlotFns = /* @__PURE__ */ listboxRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, listboxRecipeDefaultVariants, getSlotCompoundVariant(listboxRecipeCompoundVariants, slotName))])

const listboxRecipeFn = memo((props = {}) => {
  return Object.fromEntries(listboxRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const listboxRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...listboxRecipeDefaultVariants, ...compact(variants) })

export const listboxRecipe = /* @__PURE__ */ Object.assign(listboxRecipeFn, {
  __recipe__: false,
  __name__: 'listboxRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: listboxRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, listboxRecipeVariantKeys)
  },
  getVariantProps
})