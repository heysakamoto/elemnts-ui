import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tagsInputRecipeDefaultVariants = {}
const tagsInputRecipeCompoundVariants = []

const tagsInputRecipeSlotNames = [
  [
    "root",
    "tags-input__root"
  ],
  [
    "control",
    "tags-input__control"
  ],
  [
    "input",
    "tags-input__input"
  ],
  [
    "label",
    "tags-input__label"
  ],
  [
    "item",
    "tags-input__item"
  ],
  [
    "clearTrigger",
    "tags-input__clearTrigger"
  ],
  [
    "itemPreview",
    "tags-input__itemPreview"
  ],
  [
    "itemInput",
    "tags-input__itemInput"
  ],
  [
    "itemText",
    "tags-input__itemText"
  ],
  [
    "hiddenInput",
    "tags-input__hiddenInput"
  ],
  [
    "itemDeleteTrigger",
    "tags-input__itemDeleteTrigger"
  ]
]
const tagsInputRecipeSlotFns = /* @__PURE__ */ tagsInputRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tagsInputRecipeDefaultVariants, getSlotCompoundVariant(tagsInputRecipeCompoundVariants, slotName))])

const tagsInputRecipeFn = memo((props = {}) => {
  return Object.fromEntries(tagsInputRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const tagsInputRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...tagsInputRecipeDefaultVariants, ...compact(variants) })

export const tagsInputRecipe = /* @__PURE__ */ Object.assign(tagsInputRecipeFn, {
  __recipe__: false,
  __name__: 'tagsInputRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tagsInputRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, tagsInputRecipeVariantKeys)
  },
  getVariantProps
})