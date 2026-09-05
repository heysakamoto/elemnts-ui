/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SelectRecipeVariant {
  
}

type SelectRecipeVariantMap = {
  [key in keyof SelectRecipeVariant]: Array<SelectRecipeVariant[key]>
}

type SelectRecipeSlot = "root" | "label" | "item" | "indicator" | "itemText" | "content" | "list" | "positioner" | "trigger" | "clearTrigger" | "itemIndicator" | "itemGroup" | "itemGroupLabel" | "control" | "hiddenSelect" | "valueText"

export type SelectRecipeVariantProps = {
  [key in keyof SelectRecipeVariant]?: ConditionalValue<SelectRecipeVariant[key]> | undefined
}

export interface SelectRecipeRecipe {
  __slot: SelectRecipeSlot
  __type: SelectRecipeVariantProps
  (props?: SelectRecipeVariantProps): Pretty<Record<SelectRecipeSlot, string>>
  raw: (props?: SelectRecipeVariantProps) => SelectRecipeVariantProps
  variantMap: SelectRecipeVariantMap
  variantKeys: Array<keyof SelectRecipeVariant>
  splitVariantProps<Props extends SelectRecipeVariantProps>(props: Props): [SelectRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof SelectRecipeVariantProps>>]
  getVariantProps: (props?: SelectRecipeVariantProps) => SelectRecipeVariantProps
}


export declare const selectRecipe: SelectRecipeRecipe