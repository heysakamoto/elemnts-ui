/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ScrollShadowRecipeVariant {
  /**
 * @default true
 */
hideScrollbar: boolean
/**
 * @default true
 */
isEnabled: boolean
}

type ScrollShadowRecipeVariantMap = {
  [key in keyof ScrollShadowRecipeVariant]: Array<ScrollShadowRecipeVariant[key]>
}



export type ScrollShadowRecipeVariantProps = {
  [key in keyof ScrollShadowRecipeVariant]?: ConditionalValue<ScrollShadowRecipeVariant[key]> | undefined
}

export interface ScrollShadowRecipeRecipe {
  
  __type: ScrollShadowRecipeVariantProps
  (props?: ScrollShadowRecipeVariantProps): string
  raw: (props?: ScrollShadowRecipeVariantProps) => ScrollShadowRecipeVariantProps
  variantMap: ScrollShadowRecipeVariantMap
  variantKeys: Array<keyof ScrollShadowRecipeVariant>
  splitVariantProps<Props extends ScrollShadowRecipeVariantProps>(props: Props): [ScrollShadowRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof ScrollShadowRecipeVariantProps>>]
  getVariantProps: (props?: ScrollShadowRecipeVariantProps) => ScrollShadowRecipeVariantProps
}


export declare const scrollShadowRecipe: ScrollShadowRecipeRecipe