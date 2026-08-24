/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TimelineRecipeVariant {
  /**
 * @default false
 */
hideLastSeparator: boolean
}

type TimelineRecipeVariantMap = {
  [key in keyof TimelineRecipeVariant]: Array<TimelineRecipeVariant[key]>
}

type TimelineRecipeSlot = "root" | "content" | "item" | "separator" | "indicator" | "connector"

export type TimelineRecipeVariantProps = {
  [key in keyof TimelineRecipeVariant]?: ConditionalValue<TimelineRecipeVariant[key]> | undefined
}

export interface TimelineRecipeRecipe {
  __slot: TimelineRecipeSlot
  __type: TimelineRecipeVariantProps
  (props?: TimelineRecipeVariantProps): Pretty<Record<TimelineRecipeSlot, string>>
  raw: (props?: TimelineRecipeVariantProps) => TimelineRecipeVariantProps
  variantMap: TimelineRecipeVariantMap
  variantKeys: Array<keyof TimelineRecipeVariant>
  splitVariantProps<Props extends TimelineRecipeVariantProps>(props: Props): [TimelineRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof TimelineRecipeVariantProps>>]
  getVariantProps: (props?: TimelineRecipeVariantProps) => TimelineRecipeVariantProps
}


export declare const timelineRecipe: TimelineRecipeRecipe