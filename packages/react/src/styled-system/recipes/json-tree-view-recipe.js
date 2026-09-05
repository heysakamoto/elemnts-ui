import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.js';
import { createRecipe } from './create-recipe.js';

const jsonTreeViewRecipeDefaultVariants = {}
const jsonTreeViewRecipeCompoundVariants = []

const jsonTreeViewRecipeSlotNames = [
  [
    "root",
    "json-tree-view__root"
  ],
  [
    "tree",
    "json-tree-view__tree"
  ]
]
const jsonTreeViewRecipeSlotFns = /* @__PURE__ */ jsonTreeViewRecipeSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, jsonTreeViewRecipeDefaultVariants, getSlotCompoundVariant(jsonTreeViewRecipeCompoundVariants, slotName))])

const jsonTreeViewRecipeFn = memo((props = {}) => {
  return Object.fromEntries(jsonTreeViewRecipeSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const jsonTreeViewRecipeVariantKeys = []
const getVariantProps = (variants) => ({ ...jsonTreeViewRecipeDefaultVariants, ...compact(variants) })

export const jsonTreeViewRecipe = /* @__PURE__ */ Object.assign(jsonTreeViewRecipeFn, {
  __recipe__: false,
  __name__: 'jsonTreeViewRecipe',
  raw: (props) => props,
  classNameMap: {},
  variantKeys: jsonTreeViewRecipeVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, jsonTreeViewRecipeVariantKeys)
  },
  getVariantProps
})