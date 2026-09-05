/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface NumberInputRecipeVariant {
  
}

type NumberInputRecipeVariantMap = {
  [key in keyof NumberInputRecipeVariant]: Array<NumberInputRecipeVariant[key]>
}

type NumberInputRecipeSlot = "root" | "label" | "input" | "control" | "valueText" | "incrementTrigger" | "decrementTrigger" | "scrubber"

export type NumberInputRecipeVariantProps = {
  [key in keyof NumberInputRecipeVariant]?: ConditionalValue<NumberInputRecipeVariant[key]> | undefined
}

export interface NumberInputRecipeRecipe {
  __slot: NumberInputRecipeSlot
  __type: NumberInputRecipeVariantProps
  (props?: NumberInputRecipeVariantProps): Pretty<Record<NumberInputRecipeSlot, string>>
  raw: (props?: NumberInputRecipeVariantProps) => NumberInputRecipeVariantProps
  variantMap: NumberInputRecipeVariantMap
  variantKeys: Array<keyof NumberInputRecipeVariant>
  splitVariantProps<Props extends NumberInputRecipeVariantProps>(props: Props): [NumberInputRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof NumberInputRecipeVariantProps>>]
  getVariantProps: (props?: NumberInputRecipeVariantProps) => NumberInputRecipeVariantProps
}


export declare const numberInputRecipe: NumberInputRecipeRecipe