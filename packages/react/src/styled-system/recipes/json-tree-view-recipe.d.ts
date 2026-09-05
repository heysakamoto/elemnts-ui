/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface JsonTreeViewRecipeVariant {
  
}

type JsonTreeViewRecipeVariantMap = {
  [key in keyof JsonTreeViewRecipeVariant]: Array<JsonTreeViewRecipeVariant[key]>
}

type JsonTreeViewRecipeSlot = "root" | "tree"

export type JsonTreeViewRecipeVariantProps = {
  [key in keyof JsonTreeViewRecipeVariant]?: ConditionalValue<JsonTreeViewRecipeVariant[key]> | undefined
}

export interface JsonTreeViewRecipeRecipe {
  __slot: JsonTreeViewRecipeSlot
  __type: JsonTreeViewRecipeVariantProps
  (props?: JsonTreeViewRecipeVariantProps): Pretty<Record<JsonTreeViewRecipeSlot, string>>
  raw: (props?: JsonTreeViewRecipeVariantProps) => JsonTreeViewRecipeVariantProps
  variantMap: JsonTreeViewRecipeVariantMap
  variantKeys: Array<keyof JsonTreeViewRecipeVariant>
  splitVariantProps<Props extends JsonTreeViewRecipeVariantProps>(props: Props): [JsonTreeViewRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof JsonTreeViewRecipeVariantProps>>]
  getVariantProps: (props?: JsonTreeViewRecipeVariantProps) => JsonTreeViewRecipeVariantProps
}


export declare const jsonTreeViewRecipe: JsonTreeViewRecipeRecipe