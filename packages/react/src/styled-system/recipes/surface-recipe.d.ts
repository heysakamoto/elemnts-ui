/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SurfaceRecipeVariant {
  /**
 * @default "vertical"
 */
orientation: "vertical" | "horizontal"
/**
 * @default true
 */
elevated: boolean
}

type SurfaceRecipeVariantMap = {
  [key in keyof SurfaceRecipeVariant]: Array<SurfaceRecipeVariant[key]>
}

type SurfaceRecipeSlot = "root" | "header" | "addon" | "content" | "footer" | "title" | "description"

export type SurfaceRecipeVariantProps = {
  [key in keyof SurfaceRecipeVariant]?: ConditionalValue<SurfaceRecipeVariant[key]> | undefined
}

export interface SurfaceRecipeRecipe {
  __slot: SurfaceRecipeSlot
  __type: SurfaceRecipeVariantProps
  (props?: SurfaceRecipeVariantProps): Pretty<Record<SurfaceRecipeSlot, string>>
  raw: (props?: SurfaceRecipeVariantProps) => SurfaceRecipeVariantProps
  variantMap: SurfaceRecipeVariantMap
  variantKeys: Array<keyof SurfaceRecipeVariant>
  splitVariantProps<Props extends SurfaceRecipeVariantProps>(props: Props): [SurfaceRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof SurfaceRecipeVariantProps>>]
  getVariantProps: (props?: SurfaceRecipeVariantProps) => SurfaceRecipeVariantProps
}


export declare const surfaceRecipe: SurfaceRecipeRecipe