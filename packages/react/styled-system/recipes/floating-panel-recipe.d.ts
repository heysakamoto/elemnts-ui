/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface FloatingPanelRecipeVariant {
  
}

type FloatingPanelRecipeVariantMap = {
  [key in keyof FloatingPanelRecipeVariant]: Array<FloatingPanelRecipeVariant[key]>
}

type FloatingPanelRecipeSlot = "root" | "body" | "title" | "header" | "control" | "content" | "trigger" | "positioner" | "dragTrigger" | "closeTrigger" | "stageTrigger" | "resizeTrigger"

export type FloatingPanelRecipeVariantProps = {
  [key in keyof FloatingPanelRecipeVariant]?: ConditionalValue<FloatingPanelRecipeVariant[key]> | undefined
}

export interface FloatingPanelRecipeRecipe {
  __slot: FloatingPanelRecipeSlot
  __type: FloatingPanelRecipeVariantProps
  (props?: FloatingPanelRecipeVariantProps): Pretty<Record<FloatingPanelRecipeSlot, string>>
  raw: (props?: FloatingPanelRecipeVariantProps) => FloatingPanelRecipeVariantProps
  variantMap: FloatingPanelRecipeVariantMap
  variantKeys: Array<keyof FloatingPanelRecipeVariant>
  splitVariantProps<Props extends FloatingPanelRecipeVariantProps>(props: Props): [FloatingPanelRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof FloatingPanelRecipeVariantProps>>]
  getVariantProps: (props?: FloatingPanelRecipeVariantProps) => FloatingPanelRecipeVariantProps
}


export declare const floatingPanelRecipe: FloatingPanelRecipeRecipe