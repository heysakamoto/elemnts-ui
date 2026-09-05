/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TimerRecipeVariant {
  
}

type TimerRecipeVariantMap = {
  [key in keyof TimerRecipeVariant]: Array<TimerRecipeVariant[key]>
}

type TimerRecipeSlot = "root" | "control" | "area" | "item" | "itemLabel" | "itemGroup" | "separator" | "actionTrigger"

export type TimerRecipeVariantProps = {
  [key in keyof TimerRecipeVariant]?: ConditionalValue<TimerRecipeVariant[key]> | undefined
}

export interface TimerRecipeRecipe {
  __slot: TimerRecipeSlot
  __type: TimerRecipeVariantProps
  (props?: TimerRecipeVariantProps): Pretty<Record<TimerRecipeSlot, string>>
  raw: (props?: TimerRecipeVariantProps) => TimerRecipeVariantProps
  variantMap: TimerRecipeVariantMap
  variantKeys: Array<keyof TimerRecipeVariant>
  splitVariantProps<Props extends TimerRecipeVariantProps>(props: Props): [TimerRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof TimerRecipeVariantProps>>]
  getVariantProps: (props?: TimerRecipeVariantProps) => TimerRecipeVariantProps
}


export declare const timerRecipe: TimerRecipeRecipe