/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface PinInputRecipeVariant {
  
}

type PinInputRecipeVariantMap = {
  [key in keyof PinInputRecipeVariant]: Array<PinInputRecipeVariant[key]>
}

type PinInputRecipeSlot = "root" | "control" | "label" | "input"

export type PinInputRecipeVariantProps = {
  [key in keyof PinInputRecipeVariant]?: ConditionalValue<PinInputRecipeVariant[key]> | undefined
}

export interface PinInputRecipeRecipe {
  __slot: PinInputRecipeSlot
  __type: PinInputRecipeVariantProps
  (props?: PinInputRecipeVariantProps): Pretty<Record<PinInputRecipeSlot, string>>
  raw: (props?: PinInputRecipeVariantProps) => PinInputRecipeVariantProps
  variantMap: PinInputRecipeVariantMap
  variantKeys: Array<keyof PinInputRecipeVariant>
  splitVariantProps<Props extends PinInputRecipeVariantProps>(props: Props): [PinInputRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof PinInputRecipeVariantProps>>]
  getVariantProps: (props?: PinInputRecipeVariantProps) => PinInputRecipeVariantProps
}


export declare const pinInputRecipe: PinInputRecipeRecipe