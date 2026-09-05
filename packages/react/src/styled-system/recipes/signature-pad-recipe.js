import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const signaturePadRecipeDefaultVariants = {}
const signaturePadRecipeCompoundVariants = []

const signaturePadRecipeSlotNames = [
  [
    "root",
    "signature-pad__root"
  ],
  [
    "control",
    "signature-pad__control"
  ],
  [
    "label",
    "signature-pad__label"
  ],
  [
    "clearTrigger",
    "signature-pad__clearTrigger"
  ],
  [
    "segment",
    "signature-pad__segment"
  ],
  [
    "segmentPath",
    "signature-pad__segmentPath"
  ],
  [
    "guide",
    "signature-pad__guide"
  ]
]
const signaturePadRecipeSlotFns = /* @__PURE__ */ signaturePadRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, signaturePadRecipeDefaultVariants, getSlotCompoundVariant(signaturePadRecipeCompoundVariants, slotName))])

const signaturePadRecipeFn = memo((props = {}) => {
  return Object.fromEntries(signaturePadRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const signaturePadRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...signaturePadRecipeDefaultVariants, ...compact(variants) })

export const signaturePadRecipe = /* @__PURE__ */ Object.assign(signaturePadRecipeFn, {
  __recipe__: false,
  __name__: 'signaturePadRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: signaturePadRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, signaturePadRecipeVariantKeys)
  },
  getVariantProps
})