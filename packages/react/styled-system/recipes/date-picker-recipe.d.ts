/* eslint-disable */
import type { ConditionalValue } from "../types/index";
import type { DistributiveOmit, Pretty } from "../types/system-types";

type DatePickerRecipeVariant = {};

type DatePickerRecipeVariantMap = {
	[key in keyof DatePickerRecipeVariant]: Array<DatePickerRecipeVariant[key]>;
};

type DatePickerRecipeSlot =
	| "root"
	| "trigger"
	| "content"
	| "control"
	| "label"
	| "positioner"
	| "input"
	| "clearTrigger"
	| "table"
	| "nextTrigger"
	| "prevTrigger"
	| "view"
	| "monthSelect"
	| "rangeText"
	| "tableBody"
	| "tableCell"
	| "tableCellTrigger"
	| "tableHead"
	| "tableHeader"
	| "tableRow"
	| "viewTrigger"
	| "viewControl"
	| "yearSelect"
	| "presetTrigger";

export type DatePickerRecipeVariantProps = {
	[key in keyof DatePickerRecipeVariant]?:
		| ConditionalValue<DatePickerRecipeVariant[key]>
		| undefined;
};

export interface DatePickerRecipeRecipe {
	__slot: DatePickerRecipeSlot;
	__type: DatePickerRecipeVariantProps;
	(
		props?: DatePickerRecipeVariantProps,
	): Pretty<Record<DatePickerRecipeSlot, string>>;
	raw: (props?: DatePickerRecipeVariantProps) => DatePickerRecipeVariantProps;
	variantMap: DatePickerRecipeVariantMap;
	variantKeys: Array<keyof DatePickerRecipeVariant>;
	splitVariantProps<Props extends DatePickerRecipeVariantProps>(
		props: Props,
	): [
		DatePickerRecipeVariantProps,
		Pretty<DistributiveOmit<Props, keyof DatePickerRecipeVariantProps>>,
	];
	getVariantProps: (
		props?: DatePickerRecipeVariantProps,
	) => DatePickerRecipeVariantProps;
}

export declare const datePickerRecipe: DatePickerRecipeRecipe;
