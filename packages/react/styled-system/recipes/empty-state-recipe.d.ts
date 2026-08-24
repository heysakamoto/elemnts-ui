/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface EmptyStateRecipeVariant {
  
}

type EmptyStateRecipeVariantMap = {
  [key in keyof EmptyStateRecipeVariant]: Array<EmptyStateRecipeVariant[key]>
}

type EmptyStateRecipeSlot = "root" | "content" | "title" | "description" | "indicator" | "control"

export type EmptyStateRecipeVariantProps = {
  [key in keyof EmptyStateRecipeVariant]?: ConditionalValue<EmptyStateRecipeVariant[key]> | undefined
}

export interface EmptyStateRecipeRecipe {
  __slot: EmptyStateRecipeSlot
  __type: EmptyStateRecipeVariantProps
  (props?: EmptyStateRecipeVariantProps): Pretty<Record<EmptyStateRecipeSlot, string>>
  raw: (props?: EmptyStateRecipeVariantProps) => EmptyStateRecipeVariantProps
  variantMap: EmptyStateRecipeVariantMap
  variantKeys: Array<keyof EmptyStateRecipeVariant>
  splitVariantProps<Props extends EmptyStateRecipeVariantProps>(props: Props): [EmptyStateRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof EmptyStateRecipeVariantProps>>]
  getVariantProps: (props?: EmptyStateRecipeVariantProps) => EmptyStateRecipeVariantProps
}


export declare const emptyStateRecipe: EmptyStateRecipeRecipe