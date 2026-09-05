/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface TagsInputRecipeVariant {
  
}

type TagsInputRecipeVariantMap = {
  [key in keyof TagsInputRecipeVariant]: Array<TagsInputRecipeVariant[key]>
}

type TagsInputRecipeSlot = "root" | "control" | "input" | "label" | "item" | "clearTrigger" | "itemPreview" | "itemInput" | "itemText" | "hiddenInput" | "itemDeleteTrigger"

export type TagsInputRecipeVariantProps = {
  [key in keyof TagsInputRecipeVariant]?: ConditionalValue<TagsInputRecipeVariant[key]> | undefined
}

export interface TagsInputRecipeRecipe {
  __slot: TagsInputRecipeSlot
  __type: TagsInputRecipeVariantProps
  (props?: TagsInputRecipeVariantProps): Pretty<Record<TagsInputRecipeSlot, string>>
  raw: (props?: TagsInputRecipeVariantProps) => TagsInputRecipeVariantProps
  variantMap: TagsInputRecipeVariantMap
  variantKeys: Array<keyof TagsInputRecipeVariant>
  splitVariantProps<Props extends TagsInputRecipeVariantProps>(props: Props): [TagsInputRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof TagsInputRecipeVariantProps>>]
  getVariantProps: (props?: TagsInputRecipeVariantProps) => TagsInputRecipeVariantProps
}


export declare const tagsInputRecipe: TagsInputRecipeRecipe