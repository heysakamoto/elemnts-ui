import { DatePicker } from "@ark-ui/react/date-picker";

import { createStyleContext } from "../../../styled-system/jsx";
import { datePickerRecipe } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(datePickerRecipe);

export const DatePickerRootProvider = withProvider(
	DatePicker.RootProvider,
	"root",
);
DatePickerRootProvider.displayName = "DatePickerRootProvider";

export const DatePickerRoot = withProvider(DatePicker.Root, "root");
DatePickerRoot.displayName = "DatePickerRoot";

export const DatePickerControl = withContext(DatePicker.Control, "control");
DatePickerControl.displayName = "DatePickerControl";

export const DatePickerLabel = withContext(DatePicker.Label, "label");
DatePickerLabel.displayName = "DatePickerLabel";

export const DatePickerInput = withContext(DatePicker.Input, "input");
DatePickerInput.displayName = "DatePickerInput";

export const DatePickerTrigger = withContext(DatePicker.Trigger, "trigger");
DatePickerTrigger.displayName = "DatePickerTrigger";

export const DatePickerClearTrigger = withContext(
	DatePicker.ClearTrigger,
	"clearTrigger",
);
DatePickerClearTrigger.displayName = "DatePickerClearTrigger";

export const DatePickerPositioner = withContext(
	DatePicker.Positioner,
	"positioner",
);
DatePickerPositioner.displayName = "DatePickerPositioner";

export const DatePickerContent = withContext(DatePicker.Content, "content");
DatePickerContent.displayName = "DatePickerContent";

export const DatePickerViewControl = withContext(
	DatePicker.ViewControl,
	"viewControl",
);
DatePickerViewControl.displayName = "DatePickerViewControl";

export const DatePickerPrevTrigger = withContext(
	DatePicker.PrevTrigger,
	"prevTrigger",
);
DatePickerPrevTrigger.displayName = "DatePickerPrevTrigger";

export const DatePickerNextTrigger = withContext(
	DatePicker.NextTrigger,
	"nextTrigger",
);
DatePickerNextTrigger.displayName = "DatePickerNextTrigger";

export const DatePickerViewTrigger = withContext(
	DatePicker.ViewTrigger,
	"viewTrigger",
);
DatePickerViewTrigger.displayName = "DatePickerViewTrigger";

export const DatePickerRangeText = withContext(
	DatePicker.RangeText,
	"rangeText",
);
DatePickerRangeText.displayName = "DatePickerRangeText";

export const DatePickerView = withContext(DatePicker.View, "view");
DatePickerView.displayName = "DatePickerView";

export const DatePickerTable = withContext(DatePicker.Table, "table");
DatePickerTable.displayName = "DatePickerTable";

export const DatePickerTableHead = withContext(
	DatePicker.TableHead,
	"tableHead",
);
DatePickerTableHead.displayName = "DatePickerTableHead";

export const DatePickerTableBody = withContext(
	DatePicker.TableBody,
	"tableBody",
);
DatePickerTableBody.displayName = "DatePickerTableBody";

export const DatePickerTableRow = withContext(DatePicker.TableRow, "tableRow");
DatePickerTableRow.displayName = "DatePickerTableRow";

export const DatePickerTableHeader = withContext(
	DatePicker.TableHeader,
	"tableHeader",
);
DatePickerTableHeader.displayName = "DatePickerTableHeader";

export const DatePickerTableCell = withContext(
	DatePicker.TableCell,
	"tableCell",
);
DatePickerTableCell.displayName = "DatePickerTableCell";

export const DatePickerTableCellTrigger = withContext(
	DatePicker.TableCellTrigger,
	"tableCellTrigger",
);
DatePickerTableCellTrigger.displayName = "DatePickerTableCellTrigger";

export const DatePickerYearSelect = withContext(
	DatePicker.YearSelect,
	"yearSelect",
);
DatePickerYearSelect.displayName = "DatePickerYearSelect";

export const DatePickerMonthSelect = withContext(
	DatePicker.MonthSelect,
	"monthSelect",
);
DatePickerMonthSelect.displayName = "DatePickerMonthSelect";

export const DatePickerContext = DatePicker.Context;
