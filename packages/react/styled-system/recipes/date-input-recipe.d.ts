/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface DateInputRecipeVariant {
  /**
 * @default "primary"
 */
variant: "primary" | "secondary" | "tertiary"
}

type DateInputRecipeVariantMap = {
  [key in keyof DateInputRecipeVariant]: Array<DateInputRecipeVariant[key]>
}

type DateInputRecipeSlot = "root" | "control" | "label" | "segment" | "segmentGroup" | "hiddenInput"

export type DateInputRecipeVariantProps = {
  [key in keyof DateInputRecipeVariant]?: ConditionalValue<DateInputRecipeVariant[key]> | undefined
}

export interface DateInputRecipeRecipe {
  __slot: DateInputRecipeSlot
  __type: DateInputRecipeVariantProps
  (props?: DateInputRecipeVariantProps): Pretty<Record<DateInputRecipeSlot, string>>
  raw: (props?: DateInputRecipeVariantProps) => DateInputRecipeVariantProps
  variantMap: DateInputRecipeVariantMap
  variantKeys: Array<keyof DateInputRecipeVariant>
  splitVariantProps<Props extends DateInputRecipeVariantProps>(props: Props): [DateInputRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof DateInputRecipeVariantProps>>]
  getVariantProps: (props?: DateInputRecipeVariantProps) => DateInputRecipeVariantProps
}


export declare const dateInputRecipe: DateInputRecipeRecipe