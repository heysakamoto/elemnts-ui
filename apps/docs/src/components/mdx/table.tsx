import { Table as ElemntsTable, Surface } from "@elemnts-ui/react";

function TableRoot(props: ElemntsTable["RootProps"]) {
	return (
		<Surface mt="24" delta={1} rounded="16" shadowLevel={0} overflow="auto">
			<ElemntsTable {...props} />
		</Surface>
	);
}

function TableBody(props: ElemntsTable["BodyProps"]) {
	return <ElemntsTable.Body {...props} />;
}

function TableHeader(props: ElemntsTable["HeaderProps"]) {
	return <ElemntsTable.Header {...props} />;
}

function TableRow(props: ElemntsTable["RowProps"]) {
	return <ElemntsTable.Row {...props} />;
}

function TableColumnHeader(props: ElemntsTable["ColumnHeaderProps"]) {
	return (
		<ElemntsTable.ColumnHeader
			py="8"
			px="16"
			fontSize="13"
			fontWeight="500"
			color="fg.tertiary"
			{...props}
		/>
	);
}

function TableCell(props: ElemntsTable["CellProps"]) {
	return (
		<ElemntsTable.Cell
			py="8"
			px="16"
			fontSize="13"
			fontWeight="400"
			fontFamily="mono"
			whiteSpace="nowrap"
			{...props}
		/>
	);
}

export const Table = Object.assign(TableRoot, {
	Row: TableRow,
	Cell: TableCell,
	Body: TableBody,
	Header: TableHeader,
	ColumnHeader: TableColumnHeader,
});
