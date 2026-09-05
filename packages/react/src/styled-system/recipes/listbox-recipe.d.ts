/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ListboxRecipeVariant {
  
}

type ListboxRecipeVariantMap = {
  [key in keyof ListboxRecipeVariant]: Array<ListboxRecipeVariant[key]>
}

type ListboxRecipeSlot = "root" | "label" | "item" | "input" | "empty" | "content" | "itemText" | "itemGroup" | "valueText" | "itemIndicator" | "itemGroupLabel"

export type ListboxRecipeVariantProps = {
  [key in keyof ListboxRecipeVariant]?: ConditionalValue<ListboxRecipeVariant[key]> | undefined
}

export interface ListboxRecipeRecipe {
  __slot: ListboxRecipeSlot
  __type: ListboxRecipeVariantProps
  (props?: ListboxRecipeVariantProps): Pretty<Record<ListboxRecipeSlot, string>>
  raw: (props?: ListboxRecipeVariantProps) => ListboxRecipeVariantProps
  variantMap: ListboxRecipeVariantMap
  variantKeys: Array<keyof ListboxRecipeVariant>
  splitVariantProps<Props extends ListboxRecipeVariantProps>(props: Props): [ListboxRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof ListboxRecipeVariantProps>>]
  getVariantProps: (props?: ListboxRecipeVariantProps) => ListboxRecipeVariantProps
}


export declare const listboxRecipe: ListboxRecipeRecipe