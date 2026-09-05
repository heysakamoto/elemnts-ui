import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const tableRecipeDefaultVariants = {
  "size": "md",
  "variant": "primary"
}
const tableRecipeCompoundVariants = []

const tableRecipeSlotNames = [
  [
    "row",
    "table__row"
  ],
  [
    "root",
    "table__root"
  ],
  [
    "cell",
    "table__cell"
  ],
  [
    "body",
    "table__body"
  ],
  [
    "header",
    "table__header"
  ],
  [
    "footer",
    "table__footer"
  ],
  [
    "caption",
    "table__caption"
  ],
  [
    "columnHeader",
    "table__columnHeader"
  ],
  [
    "columnGroup",
    "table__columnGroup"
  ]
]
const tableRecipeSlotFns = /* @__PURE__ */ tableRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tableRecipeDefaultVariants, getSlotCompoundVariant(tableRecipeCompoundVariants, slotName))])

const tableRecipeFn = memo((props = {}) => {
  return Object.fromEntries(tableRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const tableRecipeVariantKeys = [
  "interactive",
  "pinnedHeader",
  "alternatingRows",
  "showColumnDividers",
  "variant",
  "size"
]
const getVariantProps = (variants) => ({ ...tableRecipeDefaultVariants, ...compact(variants) })

export const tableRecipe = /* @__PURE__ */ Object.assign(tableRecipeFn, {
  __recipe__: false,
  __name__: 'tableRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: tableRecipeVariantKeys,
  variantMap: {
  "interactive": [
    "true"
  ],
  "pinnedHeader": [
    "true"
  ],
  "alternatingRows": [
    "true"
  ],
  "showColumnDividers": [
    "true"
  ],
  "variant": [
    "primary",
    "secondary"
  ],
  "size": [
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, tableRecipeVariantKeys)
  },
  getVariantProps
})