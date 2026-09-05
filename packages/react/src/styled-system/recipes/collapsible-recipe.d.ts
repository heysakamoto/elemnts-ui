/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface CollapsibleRecipeVariant {
  
}

type CollapsibleRecipeVariantMap = {
  [key in keyof CollapsibleRecipeVariant]: Array<CollapsibleRecipeVariant[key]>
}

type CollapsibleRecipeSlot = "root" | "trigger" | "indicator" | "content"

export type CollapsibleRecipeVariantProps = {
  [key in keyof CollapsibleRecipeVariant]?: ConditionalValue<CollapsibleRecipeVariant[key]> | undefined
}

export interface CollapsibleRecipeRecipe {
  __slot: CollapsibleRecipeSlot
  __type: CollapsibleRecipeVariantProps
  (props?: CollapsibleRecipeVariantProps): Pretty<Record<CollapsibleRecipeSlot, string>>
  raw: (props?: CollapsibleRecipeVariantProps) => CollapsibleRecipeVariantProps
  variantMap: CollapsibleRecipeVariantMap
  variantKeys: Array<keyof CollapsibleRecipeVariant>
  splitVariantProps<Props extends CollapsibleRecipeVariantProps>(props: Props): [CollapsibleRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof CollapsibleRecipeVariantProps>>]
  getVariantProps: (props?: CollapsibleRecipeVariantProps) => CollapsibleRecipeVariantProps
}


export declare const collapsibleRecipe: CollapsibleRecipeRecipe