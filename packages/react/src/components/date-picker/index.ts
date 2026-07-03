import type { ComponentProps } from "react";

import {
	DatePickerClearTrigger,
	DatePickerContent,
	DatePickerContext,
	DatePickerControl,
	DatePickerInput,
	DatePickerLabel,
	DatePickerMonthSelect,
	DatePickerNextTrigger,
	DatePickerPositioner,
	DatePickerPrevTrigger,
	DatePickerRangeText,
	DatePickerRoot,
	DatePickerRootProvider,
	DatePickerTable,
	DatePickerTableBody,
	DatePickerTableCell,
	DatePickerTableCellTrigger,
	DatePickerTableHead,
	DatePickerTableHeader,
	DatePickerTableRow,
	DatePickerTrigger,
	DatePickerView,
	DatePickerViewControl,
	DatePickerViewTrigger,
	DatePickerYearSelect,
} from "./date-picker";

export type DatePickerRootProviderProps = ComponentProps<
	typeof DatePickerRootProvider
>;
export type DatePickerRootProps = ComponentProps<typeof DatePickerRoot>;
export type DatePickerControlProps = ComponentProps<typeof DatePickerControl>;
export type DatePickerLabelProps = ComponentProps<typeof DatePickerLabel>;
export type DatePickerInputProps = ComponentProps<typeof DatePickerInput>;
export type DatePickerTriggerProps = ComponentProps<typeof DatePickerTrigger>;
export type DatePickerClearTriggerProps = ComponentProps<
	typeof DatePickerClearTrigger
>;
export type DatePickerPositionerProps = ComponentProps<
	typeof DatePickerPositioner
>;
export type DatePickerContentProps = ComponentProps<typeof DatePickerContent>;
export type DatePickerViewControlProps = ComponentProps<
	typeof DatePickerViewControl
>;
export type DatePickerPrevTriggerProps = ComponentProps<
	typeof DatePickerPrevTrigger
>;
export type DatePickerNextTriggerProps = ComponentProps<
	typeof DatePickerNextTrigger
>;
export type DatePickerViewTriggerProps = ComponentProps<
	typeof DatePickerViewTrigger
>;
export type DatePickerRangeTextProps = ComponentProps<
	typeof DatePickerRangeText
>;
export type DatePickerViewProps = ComponentProps<typeof DatePickerView>;
export type DatePickerTableProps = ComponentProps<typeof DatePickerTable>;
export type DatePickerTableHeadProps = ComponentProps<
	typeof DatePickerTableHead
>;
export type DatePickerTableBodyProps = ComponentProps<
	typeof DatePickerTableBody
>;
export type DatePickerTableRowProps = ComponentProps<typeof DatePickerTableRow>;
export type DatePickerTableHeaderProps = ComponentProps<
	typeof DatePickerTableHeader
>;
export type DatePickerTableCellProps = ComponentProps<
	typeof DatePickerTableCell
>;
export type DatePickerTableCellTriggerProps = ComponentProps<
	typeof DatePickerTableCellTrigger
>;
export type DatePickerYearSelectProps = ComponentProps<
	typeof DatePickerYearSelect
>;
export type DatePickerMonthSelectProps = ComponentProps<
	typeof DatePickerMonthSelect
>;
export type DatePickerContextProps = ComponentProps<typeof DatePickerContext>;

export const DatePicker = Object.assign(DatePickerRoot, {
	RootProvider: DatePickerRootProvider,
	Root: DatePickerRoot,
	ClearTrigger: DatePickerClearTrigger,
	Content: DatePickerContent,
	Context: DatePickerContext,
	Control: DatePickerControl,
	Input: DatePickerInput,
	Label: DatePickerLabel,
	MonthSelect: DatePickerMonthSelect,
	NextTrigger: DatePickerNextTrigger,
	Positioner: DatePickerPositioner,
	PrevTrigger: DatePickerPrevTrigger,
	RangeText: DatePickerRangeText,
	Table: DatePickerTable,
	TableBody: DatePickerTableBody,
	TableCell: DatePickerTableCell,
	TableCellTrigger: DatePickerTableCellTrigger,
	TableHead: DatePickerTableHead,
	TableHeader: DatePickerTableHeader,
	TableRow: DatePickerTableRow,
	Trigger: DatePickerTrigger,
	View: DatePickerView,
	ViewControl: DatePickerViewControl,
	ViewTrigger: DatePickerViewTrigger,
	YearSelect: DatePickerYearSelect,
});

export type DatePicker = {
	Props: DatePickerRootProps;
	RootProviderProps: DatePickerRootProviderProps;
	RootProps: DatePickerRootProps;
	ClearTriggerProps: DatePickerClearTriggerProps;
	ContentProps: DatePickerContentProps;
	ContextProps: DatePickerContextProps;
	ControlProps: DatePickerControlProps;
	InputProps: DatePickerInputProps;
	LabelProps: DatePickerLabelProps;
	MonthSelectProps: DatePickerMonthSelectProps;
	NextTriggerProps: DatePickerNextTriggerProps;
	PositionerProps: DatePickerPositionerProps;
	PrevTriggerProps: DatePickerPrevTriggerProps;
	RangeTextProps: DatePickerRangeTextProps;
	TableProps: DatePickerTableProps;
	TableBodyProps: DatePickerTableBodyProps;
	TableCellProps: DatePickerTableCellProps;
	TableCellTriggerProps: DatePickerTableCellTriggerProps;
	TableHeadProps: DatePickerTableHeadProps;
	TableHeaderProps: DatePickerTableHeaderProps;
	TableRowProps: DatePickerTableRowProps;
	TriggerProps: DatePickerTriggerProps;
	ViewProps: DatePickerViewProps;
	ViewControlProps: DatePickerViewControlProps;
	ViewTriggerProps: DatePickerViewTriggerProps;
	YearSelectProps: DatePickerYearSelectProps;
};

export type {
	DatePickerFocusChangeDetails,
	DatePickerOpenChangeDetails,
	DatePickerValueChangeDetails,
	DatePickerViewChangeDetails,
	DatePickerVisibleRangeChangeDetails,
	UseDatePickerContext,
	UseDatePickerProps,
	UseDatePickerReturn,
} from "@ark-ui/react/date-picker";
export {
	parseDate,
	useDatePicker,
	useDatePickerContext,
} from "@ark-ui/react/date-picker";

export {
	DatePickerClearTrigger,
	DatePickerContent,
	DatePickerContext,
	DatePickerControl,
	DatePickerInput,
	DatePickerLabel,
	DatePickerMonthSelect,
	DatePickerNextTrigger,
	DatePickerPositioner,
	DatePickerPrevTrigger,
	DatePickerRangeText,
	DatePickerRoot,
	DatePickerRootProvider,
	DatePickerTable,
	DatePickerTableBody,
	DatePickerTableCell,
	DatePickerTableCellTrigger,
	DatePickerTableHead,
	DatePickerTableHeader,
	DatePickerTableRow,
	DatePickerTrigger,
	DatePickerView,
	DatePickerViewControl,
	DatePickerViewTrigger,
	DatePickerYearSelect,
};
