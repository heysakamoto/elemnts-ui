/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface RadioGroupRecipeVariant {
  
}

type RadioGroupRecipeVariantMap = {
  [key in keyof RadioGroupRecipeVariant]: Array<RadioGroupRecipeVariant[key]>
}

type RadioGroupRecipeSlot = "root" | "label" | "item" | "itemText" | "itemControl" | "indicator"

export type RadioGroupRecipeVariantProps = {
  [key in keyof RadioGroupRecipeVariant]?: ConditionalValue<RadioGroupRecipeVariant[key]> | undefined
}

export interface RadioGroupRecipeRecipe {
  __slot: RadioGroupRecipeSlot
  __type: RadioGroupRecipeVariantProps
  (props?: RadioGroupRecipeVariantProps): Pretty<Record<RadioGroupRecipeSlot, string>>
  raw: (props?: RadioGroupRecipeVariantProps) => RadioGroupRecipeVariantProps
  variantMap: RadioGroupRecipeVariantMap
  variantKeys: Array<keyof RadioGroupRecipeVariant>
  splitVariantProps<Props extends RadioGroupRecipeVariantProps>(props: Props): [RadioGroupRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof RadioGroupRecipeVariantProps>>]
  getVariantProps: (props?: RadioGroupRecipeVariantProps) => RadioGroupRecipeVariantProps
}


export declare const radioGroupRecipe: RadioGroupRecipeRecipe