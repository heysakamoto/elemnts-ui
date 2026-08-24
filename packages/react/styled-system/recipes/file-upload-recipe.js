import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const fileUploadRecipeDefaultVariants = {}
const fileUploadRecipeCompoundVariants = []

const fileUploadRecipeSlotNames = [
  [
    "root",
    "file-upload__root"
  ],
  [
    "trigger",
    "file-upload__trigger"
  ],
  [
    "dropzone",
    "file-upload__dropzone"
  ],
  [
    "item",
    "file-upload__item"
  ],
  [
    "itemDeleteTrigger",
    "file-upload__itemDeleteTrigger"
  ],
  [
    "itemGroup",
    "file-upload__itemGroup"
  ],
  [
    "itemName",
    "file-upload__itemName"
  ],
  [
    "itemPreview",
    "file-upload__itemPreview"
  ],
  [
    "itemPreviewImage",
    "file-upload__itemPreviewImage"
  ],
  [
    "itemSizeText",
    "file-upload__itemSizeText"
  ],
  [
    "label",
    "file-upload__label"
  ],
  [
    "clearTrigger",
    "file-upload__clearTrigger"
  ]
]
const fileUploadRecipeSlotFns = /* @__PURE__ */ fileUploadRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, fileUploadRecipeDefaultVariants, getSlotCompoundVariant(fileUploadRecipeCompoundVariants, slotName))])

const fileUploadRecipeFn = memo((props = {}) => {
  return Object.fromEntries(fileUploadRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const fileUploadRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...fileUploadRecipeDefaultVariants, ...compact(variants) })

export const fileUploadRecipe = /* @__PURE__ */ Object.assign(fileUploadRecipeFn, {
  __recipe__: false,
  __name__: 'fileUploadRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: fileUploadRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, fileUploadRecipeVariantKeys)
  },
  getVariantProps
})