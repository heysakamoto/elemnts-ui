/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TreeViewRecipeVariant {
  
}

type TreeViewRecipeVariantMap = {
  [key in keyof TreeViewRecipeVariant]: Array<TreeViewRecipeVariant[key]>
}

type TreeViewRecipeSlot = "root" | "label" | "tree" | "item" | "itemIndicator" | "itemText" | "branch" | "branchControl" | "branchTrigger" | "branchContent" | "branchText" | "branchIndicator" | "branchIndentGuide" | "nodeRenameInput" | "nodeCheckbox"

export type TreeViewRecipeVariantProps = {
  [key in keyof TreeViewRecipeVariant]?: ConditionalValue<TreeViewRecipeVariant[key]> | undefined
}

export interface TreeViewRecipeRecipe {
  __slot: TreeViewRecipeSlot
  __type: TreeViewRecipeVariantProps
  (props?: TreeViewRecipeVariantProps): Pretty<Record<TreeViewRecipeSlot, string>>
  raw: (props?: TreeViewRecipeVariantProps) => TreeViewRecipeVariantProps
  variantMap: TreeViewRecipeVariantMap
  variantKeys: Array<keyof TreeViewRecipeVariant>
  splitVariantProps<Props extends TreeViewRecipeVariantProps>(props: Props): [TreeViewRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof TreeViewRecipeVariantProps>>]
  getVariantProps: (props?: TreeViewRecipeVariantProps) => TreeViewRecipeVariantProps
}


export declare const treeViewRecipe: TreeViewRecipeRecipe