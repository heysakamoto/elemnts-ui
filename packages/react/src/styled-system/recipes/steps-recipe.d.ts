/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface StepsRecipeVariant {
  
}

type StepsRecipeVariantMap = {
  [key in keyof StepsRecipeVariant]: Array<StepsRecipeVariant[key]>
}

type StepsRecipeSlot = "root" | "content" | "list" | "item" | "trigger" | "indicator" | "separator" | "completedContent" | "nextTrigger" | "prevTrigger" | "progress" | "trigger"

export type StepsRecipeVariantProps = {
  [key in keyof StepsRecipeVariant]?: ConditionalValue<StepsRecipeVariant[key]> | undefined
}

export interface StepsRecipeRecipe {
  __slot: StepsRecipeSlot
  __type: StepsRecipeVariantProps
  (props?: StepsRecipeVariantProps): Pretty<Record<StepsRecipeSlot, string>>
  raw: (props?: StepsRecipeVariantProps) => StepsRecipeVariantProps
  variantMap: StepsRecipeVariantMap
  variantKeys: Array<keyof StepsRecipeVariant>
  splitVariantProps<Props extends StepsRecipeVariantProps>(props: Props): [StepsRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof StepsRecipeVariantProps>>]
  getVariantProps: (props?: StepsRecipeVariantProps) => StepsRecipeVariantProps
}


export declare const stepsRecipe: StepsRecipeRecipe