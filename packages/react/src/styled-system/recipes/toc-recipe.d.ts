/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TocRecipeVariant {
  
}

type TocRecipeVariantMap = {
  [key in keyof TocRecipeVariant]: Array<TocRecipeVariant[key]>
}

type TocRecipeSlot = "root" | "content" | "nav" | "item" | "list" | "title" | "indicator" | "link"

export type TocRecipeVariantProps = {
  [key in keyof TocRecipeVariant]?: ConditionalValue<TocRecipeVariant[key]> | undefined
}

export interface TocRecipeRecipe {
  __slot: TocRecipeSlot
  __type: TocRecipeVariantProps
  (props?: TocRecipeVariantProps): Pretty<Record<TocRecipeSlot, string>>
  raw: (props?: TocRecipeVariantProps) => TocRecipeVariantProps
  variantMap: TocRecipeVariantMap
  variantKeys: Array<keyof TocRecipeVariant>
  splitVariantProps<Props extends TocRecipeVariantProps>(props: Props): [TocRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof TocRecipeVariantProps>>]
  getVariantProps: (props?: TocRecipeVariantProps) => TocRecipeVariantProps
}


export declare const tocRecipe: TocRecipeRecipe