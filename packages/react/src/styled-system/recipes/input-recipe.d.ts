/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface InputRecipeVariant {
  /**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg" | "xl"
/**
 * @default "primary"
 */
variant: "primary" | "secondary" | "tertiary"
}

type InputRecipeVariantMap = {
  [key in keyof InputRecipeVariant]: Array<InputRecipeVariant[key]>
}



export type InputRecipeVariantProps = {
  [key in keyof InputRecipeVariant]?: ConditionalValue<InputRecipeVariant[key]> | undefined
}

export interface InputRecipeRecipe {
  
  __type: InputRecipeVariantProps
  (props?: InputRecipeVariantProps): string
  raw: (props?: InputRecipeVariantProps) => InputRecipeVariantProps
  variantMap: InputRecipeVariantMap
  variantKeys: Array<keyof InputRecipeVariant>
  splitVariantProps<Props extends InputRecipeVariantProps>(props: Props): [InputRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof InputRecipeVariantProps>>]
  getVariantProps: (props?: InputRecipeVariantProps) => InputRecipeVariantProps
}


export declare const inputRecipe: InputRecipeRecipe