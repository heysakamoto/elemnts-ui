import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const timelineRecipeDefaultVariants = {
  "hideLastSeparator": false
}
const timelineRecipeCompoundVariants = []

const timelineRecipeSlotNames = [
  [
    "root",
    "timeline__root"
  ],
  [
    "content",
    "timeline__content"
  ],
  [
    "item",
    "timeline__item"
  ],
  [
    "separator",
    "timeline__separator"
  ],
  [
    "indicator",
    "timeline__indicator"
  ],
  [
    "connector",
    "timeline__connector"
  ]
]
const timelineRecipeSlotFns = /* @__PURE__ */ timelineRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, timelineRecipeDefaultVariants, getSlotCompoundVariant(timelineRecipeCompoundVariants, slotName))])

const timelineRecipeFn = memo((props = {}) => {
  return Object.fromEntries(timelineRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const timelineRecipeVariantKeys = [
  "hideLastSeparator"
]
const getVariantProps = (variants) => ({ ...timelineRecipeDefaultVariants, ...compact(variants) })

export const timelineRecipe = /* @__PURE__ */ Object.assign(timelineRecipeFn, {
  __recipe__: false,
  __name__: 'timelineRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: timelineRecipeVariantKeys,
  variantMap: {
  "hideLastSeparator": [
    "true"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, timelineRecipeVariantKeys)
  },
  getVariantProps
})