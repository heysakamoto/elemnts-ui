import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const imageCropperRecipeDefaultVariants = {}
const imageCropperRecipeCompoundVariants = []

const imageCropperRecipeSlotNames = [
  [
    "root",
    "img-cropper__root"
  ],
  [
    "handle",
    "img-cropper__handle"
  ],
  [
    "grid",
    "img-cropper__grid"
  ],
  [
    "image",
    "img-cropper__image"
  ],
  [
    "selection",
    "img-cropper__selection"
  ],
  [
    "viewport",
    "img-cropper__viewport"
  ]
]
const imageCropperRecipeSlotFns = /* @__PURE__ */ imageCropperRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, imageCropperRecipeDefaultVariants, getSlotCompoundVariant(imageCropperRecipeCompoundVariants, slotName))])

const imageCropperRecipeFn = memo((props = {}) => {
  return Object.fromEntries(imageCropperRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const imageCropperRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...imageCropperRecipeDefaultVariants, ...compact(variants) })

export const imageCropperRecipe = /* @__PURE__ */ Object.assign(imageCropperRecipeFn, {
  __recipe__: false,
  __name__: 'imageCropperRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: imageCropperRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, imageCropperRecipeVariantKeys)
  },
  getVariantProps
})