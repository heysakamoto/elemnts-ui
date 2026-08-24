/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface FieldsetRecipeVariant {
  
}

type FieldsetRecipeVariantMap = {
  [key in keyof FieldsetRecipeVariant]: Array<FieldsetRecipeVariant[key]>
}

type FieldsetRecipeSlot = "root" | "errorText" | "helperText" | "legend"

export type FieldsetRecipeVariantProps = {
  [key in keyof FieldsetRecipeVariant]?: ConditionalValue<FieldsetRecipeVariant[key]> | undefined
}

export interface FieldsetRecipeRecipe {
  __slot: FieldsetRecipeSlot
  __type: FieldsetRecipeVariantProps
  (props?: FieldsetRecipeVariantProps): Pretty<Record<FieldsetRecipeSlot, string>>
  raw: (props?: FieldsetRecipeVariantProps) => FieldsetRecipeVariantProps
  variantMap: FieldsetRecipeVariantMap
  variantKeys: Array<keyof FieldsetRecipeVariant>
  splitVariantProps<Props extends FieldsetRecipeVariantProps>(props: Props): [FieldsetRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof FieldsetRecipeVariantProps>>]
  getVariantProps: (props?: FieldsetRecipeVariantProps) => FieldsetRecipeVariantProps
}


export declare const fieldsetRecipe: FieldsetRecipeRecipe