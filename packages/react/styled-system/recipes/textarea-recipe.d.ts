/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TextareaRecipeVariant {
  /**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg" | "xl"
/**
 * @default "primary"
 */
variant: "primary" | "secondary" | "tertiary"
}

type TextareaRecipeVariantMap = {
  [key in keyof TextareaRecipeVariant]: Array<TextareaRecipeVariant[key]>
}



export type TextareaRecipeVariantProps = {
  [key in keyof TextareaRecipeVariant]?: ConditionalValue<TextareaRecipeVariant[key]> | undefined
}

export interface TextareaRecipeRecipe {
  
  __type: TextareaRecipeVariantProps
  (props?: TextareaRecipeVariantProps): string
  raw: (props?: TextareaRecipeVariantProps) => TextareaRecipeVariantProps
  variantMap: TextareaRecipeVariantMap
  variantKeys: Array<keyof TextareaRecipeVariant>
  splitVariantProps<Props extends TextareaRecipeVariantProps>(props: Props): [TextareaRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof TextareaRecipeVariantProps>>]
  getVariantProps: (props?: TextareaRecipeVariantProps) => TextareaRecipeVariantProps
}


export declare const textareaRecipe: TextareaRecipeRecipe