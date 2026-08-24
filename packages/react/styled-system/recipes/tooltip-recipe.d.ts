/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TooltipRecipeVariant {
  
}

type TooltipRecipeVariantMap = {
  [key in keyof TooltipRecipeVariant]: Array<TooltipRecipeVariant[key]>
}

type TooltipRecipeSlot = "content" | "trigger" | "arrow" | "arrowTip" | "positioner"

export type TooltipRecipeVariantProps = {
  [key in keyof TooltipRecipeVariant]?: ConditionalValue<TooltipRecipeVariant[key]> | undefined
}

export interface TooltipRecipeRecipe {
  __slot: TooltipRecipeSlot
  __type: TooltipRecipeVariantProps
  (props?: TooltipRecipeVariantProps): Pretty<Record<TooltipRecipeSlot, string>>
  raw: (props?: TooltipRecipeVariantProps) => TooltipRecipeVariantProps
  variantMap: TooltipRecipeVariantMap
  variantKeys: Array<keyof TooltipRecipeVariant>
  splitVariantProps<Props extends TooltipRecipeVariantProps>(props: Props): [TooltipRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof TooltipRecipeVariantProps>>]
  getVariantProps: (props?: TooltipRecipeVariantProps) => TooltipRecipeVariantProps
}


export declare const tooltipRecipe: TooltipRecipeRecipe