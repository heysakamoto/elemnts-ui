/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface PaginationRecipeVariant {
  
}

type PaginationRecipeVariantMap = {
  [key in keyof PaginationRecipeVariant]: Array<PaginationRecipeVariant[key]>
}

type PaginationRecipeSlot = "root" | "ellipsis" | "item" | "prevTrigger" | "nextTrigger" | "firstTrigger" | "lastTrigger"

export type PaginationRecipeVariantProps = {
  [key in keyof PaginationRecipeVariant]?: ConditionalValue<PaginationRecipeVariant[key]> | undefined
}

export interface PaginationRecipeRecipe {
  __slot: PaginationRecipeSlot
  __type: PaginationRecipeVariantProps
  (props?: PaginationRecipeVariantProps): Pretty<Record<PaginationRecipeSlot, string>>
  raw: (props?: PaginationRecipeVariantProps) => PaginationRecipeVariantProps
  variantMap: PaginationRecipeVariantMap
  variantKeys: Array<keyof PaginationRecipeVariant>
  splitVariantProps<Props extends PaginationRecipeVariantProps>(props: Props): [PaginationRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof PaginationRecipeVariantProps>>]
  getVariantProps: (props?: PaginationRecipeVariantProps) => PaginationRecipeVariantProps
}


export declare const paginationRecipe: PaginationRecipeRecipe