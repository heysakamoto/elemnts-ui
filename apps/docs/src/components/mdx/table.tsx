import { Table as MotoTable, Surface } from "@moto-ui/react";

function TableRoot(props: MotoTable["RootProps"]) {
  return (
    <Surface delta={1} rounded="16" shadowLevel={0} mt="24" overflow="auto">
      <MotoTable {...props} />
    </Surface>
  );
}

function TableBody(props: MotoTable["BodyProps"]) {
  return <MotoTable.Body {...props} />;
}

function TableHeader(props: MotoTable["HeaderProps"]) {
  return <MotoTable.Header {...props} />;
}

function TableRow(props: MotoTable["RowProps"]) {
  return <MotoTable.Row {...props} />;
}

function TableColumnHeader(props: MotoTable["ColumnHeaderProps"]) {
  return (
    <MotoTable.ColumnHeader
      py="8"
      px="16"
      fontSize="13"
      fontWeight="500"
      color="fg.tertiary"
      {...props}
    />
  );
}

function TableCell(props: MotoTable["CellProps"]) {
  return (
    <MotoTable.Cell
      py="8"
      px="16"
      fontSize="13"
      fontWeight="400"
      whiteSpace="nowrap"
      fontFamily="mono"
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
