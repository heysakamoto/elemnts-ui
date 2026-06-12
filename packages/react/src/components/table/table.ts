import { ark } from "@ark-ui/react";
import { createStyleContext } from "@moto-ui/styled-system/jsx";
import { tableRecipe } from "@moto-ui/styled-system/recipes";

const { withProvider, withContext } = createStyleContext(tableRecipe);

export const TableRoot = withProvider(ark.table, "root", {
	dataAttr: true,
	defaultProps: {
		"data-part": "root",
		"data-scope": "table",
	},
});
TableRoot.displayName = "TableRoot";

export const TableBody = withContext(ark.tbody, "body", {
	dataAttr: true,
	defaultProps: {
		"data-part": "body",
		"data-scope": "table",
	},
});
TableBody.displayName = "TableBody";

export const TableHeader = withContext(ark.thead, "header", {
	dataAttr: true,
	defaultProps: {
		"data-part": "header",
		"data-scope": "table",
	},
});
TableHeader.displayName = "TableHeader";

export const TableFooter = withContext(ark.tfoot, "footer", {
	dataAttr: true,
	defaultProps: {
		"data-part": "footer",
		"data-scope": "table",
	},
});
TableFooter.displayName = "TableFooter";

export const TableCell = withContext(ark.td, "cell", {
	dataAttr: true,
	defaultProps: {
		"data-part": "cell",
		"data-scope": "table",
	},
});
TableCell.displayName = "TableCell";

export const TableRow = withContext(ark.tr, "row", {
	dataAttr: true,
	defaultProps: {
		"data-part": "row",
		"data-scope": "table",
	},
});
TableRow.displayName = "TableRow";

export const TableColumnHeader = withContext(ark.th, "columnHeader", {
	dataAttr: true,
	defaultProps: {
		"data-part": "column-header",
		"data-scope": "table",
	},
});
TableColumnHeader.displayName = "TableColumnHeader";

export const TableColumnGroup = withContext(ark.colgroup, "columnGroup", {
	dataAttr: true,
	defaultProps: {
		"data-part": "column-group",
		"data-scope": "table",
	},
});
TableColumnGroup.displayName = "TableColumnGroup";

export const TableCaption = withContext(ark.caption, "caption", {
	dataAttr: true,
	defaultProps: {
		"data-part": "caption",
		"data-scope": "table",
	},
});
TableCaption.displayName = "TableCaption";
