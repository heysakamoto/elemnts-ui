import type { ComponentProps } from "react";
import {
	TableBody,
	TableCaption,
	TableCell,
	TableColumnGroup,
	TableColumnHeader,
	TableFooter,
	TableHeader,
	TableRoot,
	TableRow,
} from "./table";

export type TableRootProps = ComponentProps<typeof TableRoot>;
export type TableBodyProps = ComponentProps<typeof TableBody>;
export type TableHeaderProps = ComponentProps<typeof TableHeader>;
export type TableFooterProps = ComponentProps<typeof TableFooter>;
export type TableCellProps = ComponentProps<typeof TableCell>;
export type TableRowProps = ComponentProps<typeof TableRow>;
export type TableColumnHeaderProps = ComponentProps<typeof TableColumnHeader>;
export type TableColumnGroupProps = ComponentProps<typeof TableColumnGroup>;
export type TableCaptionProps = ComponentProps<typeof TableCaption>;

export const Table = Object.assign(TableRoot, {
	Row: TableRow,
	Cell: TableCell,
	Root: TableRoot,
	Body: TableBody,
	Header: TableHeader,
	Footer: TableFooter,
	Caption: TableCaption,
	ColumnHeader: TableColumnHeader,
	ColumnGroup: TableColumnGroup,
});

export type Table = {
	RowProps: TableRowProps;
	CellProps: TableCellProps;
	RootProps: TableRootProps;
	BodyProps: TableBodyProps;
	HeaderProps: TableHeaderProps;
	FooterProps: TableFooterProps;
	CaptionProps: TableCaptionProps;
	ColumnHeaderProps: TableColumnHeaderProps;
	ColumnGroupProps: TableColumnGroupProps;
};

export {
	TableBody,
	TableCaption,
	TableCell,
	TableColumnGroup,
	TableColumnHeader,
	TableFooter,
	TableHeader,
	TableRoot,
	TableRow,
};
