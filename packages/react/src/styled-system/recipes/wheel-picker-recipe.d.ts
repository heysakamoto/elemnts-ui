/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface WheelPickerRecipeVariant {
  /**
 * @default "primary"
 */
variant: "primary" | "secondary"
}

type WheelPickerRecipeVariantMap = {
  [key in keyof WheelPickerRecipeVariant]: Array<WheelPickerRecipeVariant[key]>
}

type WheelPickerRecipeSlot = "root"

export type WheelPickerRecipeVariantProps = {
  [key in keyof WheelPickerRecipeVariant]?: ConditionalValue<WheelPickerRecipeVariant[key]> | undefined
}

export interface WheelPickerRecipeRecipe {
  __slot: WheelPickerRecipeSlot
  __type: WheelPickerRecipeVariantProps
  (props?: WheelPickerRecipeVariantProps): Pretty<Record<WheelPickerRecipeSlot, string>>
  raw: (props?: WheelPickerRecipeVariantProps) => WheelPickerRecipeVariantProps
  variantMap: WheelPickerRecipeVariantMap
  variantKeys: Array<keyof WheelPickerRecipeVariant>
  splitVariantProps<Props extends WheelPickerRecipeVariantProps>(props: Props): [WheelPickerRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof WheelPickerRecipeVariantProps>>]
  getVariantProps: (props?: WheelPickerRecipeVariantProps) => WheelPickerRecipeVariantProps
}


export declare const wheelPickerRecipe: WheelPickerRecipeRecipe