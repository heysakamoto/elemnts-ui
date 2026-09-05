/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ToastRecipeVariant {
  
}

type ToastRecipeVariantMap = {
  [key in keyof ToastRecipeVariant]: Array<ToastRecipeVariant[key]>
}

type ToastRecipeSlot = "root" | "title" | "description" | "indicator" | "actionTrigger" | "group" | "closeTrigger" | "control"

export type ToastRecipeVariantProps = {
  [key in keyof ToastRecipeVariant]?: ConditionalValue<ToastRecipeVariant[key]> | undefined
}

export interface ToastRecipeRecipe {
  __slot: ToastRecipeSlot
  __type: ToastRecipeVariantProps
  (props?: ToastRecipeVariantProps): Pretty<Record<ToastRecipeSlot, string>>
  raw: (props?: ToastRecipeVariantProps) => ToastRecipeVariantProps
  variantMap: ToastRecipeVariantMap
  variantKeys: Array<keyof ToastRecipeVariant>
  splitVariantProps<Props extends ToastRecipeVariantProps>(props: Props): [ToastRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof ToastRecipeVariantProps>>]
  getVariantProps: (props?: ToastRecipeVariantProps) => ToastRecipeVariantProps
}


export declare const toastRecipe: ToastRecipeRecipe