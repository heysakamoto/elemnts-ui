import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const surfaceRecipeDefaultVariants = {
  "elevated": true,
  "orientation": "vertical"
}
const surfaceRecipeCompoundVariants = []

const surfaceRecipeSlotNames = [
  [
    "root",
    "surface__root"
  ],
  [
    "header",
    "surface__header"
  ],
  [
    "addon",
    "surface__addon"
  ],
  [
    "content",
    "surface__content"
  ],
  [
    "footer",
    "surface__footer"
  ],
  [
    "title",
    "surface__title"
  ],
  [
    "description",
    "surface__description"
  ]
]
const surfaceRecipeSlotFns = /* @__PURE__ */ surfaceRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, surfaceRecipeDefaultVariants, getSlotCompoundVariant(surfaceRecipeCompoundVariants, slotName))])

const surfaceRecipeFn = memo((props = {}) => {
  return Object.fromEntries(surfaceRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const surfaceRecipeVariantKeys = [
  "orientation",
  "elevated"
]
const getVariantProps = (variants) => ({ ...surfaceRecipeDefaultVariants, ...compact(variants) })

export const surfaceRecipe = /* @__PURE__ */ Object.assign(surfaceRecipeFn, {
  __recipe__: false,
  __name__: 'surfaceRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: surfaceRecipeVariantKeys,
  variantMap: {
  "orientation": [
    "vertical",
    "horizontal"
  ],
  "elevated": [
    "false"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, surfaceRecipeVariantKeys)
  },
  getVariantProps
})