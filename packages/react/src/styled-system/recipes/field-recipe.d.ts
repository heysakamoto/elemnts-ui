/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface FieldRecipeVariant {
  
}

type FieldRecipeVariantMap = {
  [key in keyof FieldRecipeVariant]: Array<FieldRecipeVariant[key]>
}

type FieldRecipeSlot = "root" | "input" | "label" | "textarea" | "errorText" | "helperText" | "select" | "requiredIndicator"

export type FieldRecipeVariantProps = {
  [key in keyof FieldRecipeVariant]?: ConditionalValue<FieldRecipeVariant[key]> | undefined
}

export interface FieldRecipeRecipe {
  __slot: FieldRecipeSlot
  __type: FieldRecipeVariantProps
  (props?: FieldRecipeVariantProps): Pretty<Record<FieldRecipeSlot, string>>
  raw: (props?: FieldRecipeVariantProps) => FieldRecipeVariantProps
  variantMap: FieldRecipeVariantMap
  variantKeys: Array<keyof FieldRecipeVariant>
  splitVariantProps<Props extends FieldRecipeVariantProps>(props: Props): [FieldRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof FieldRecipeVariantProps>>]
  getVariantProps: (props?: FieldRecipeVariantProps) => FieldRecipeVariantProps
}


export declare const fieldRecipe: FieldRecipeRecipe