/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface DownloadRecipeVariant {
  
}

type DownloadRecipeVariantMap = {
  [key in keyof DownloadRecipeVariant]: Array<DownloadRecipeVariant[key]>
}



export type DownloadRecipeVariantProps = {
  [key in keyof DownloadRecipeVariant]?: ConditionalValue<DownloadRecipeVariant[key]> | undefined
}

export interface DownloadRecipeRecipe {
  
  __type: DownloadRecipeVariantProps
  (props?: DownloadRecipeVariantProps): string
  raw: (props?: DownloadRecipeVariantProps) => DownloadRecipeVariantProps
  variantMap: DownloadRecipeVariantMap
  variantKeys: Array<keyof DownloadRecipeVariant>
  splitVariantProps<Props extends DownloadRecipeVariantProps>(props: Props): [DownloadRecipeVariantProps, Pretty<DistributiveOmit<Props, keyof DownloadRecipeVariantProps>>]
  getVariantProps: (props?: DownloadRecipeVariantProps) => DownloadRecipeVariantProps
}


export declare const downloadRecipe: DownloadRecipeRecipe