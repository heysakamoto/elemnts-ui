import { Container, Table } from "@elemnts-ui/react";

const columns = ["Item", "Quantity", "Unit Price", "Total"];
const rows = [
	{ item: "Widget A", quantity: "10", unitPrice: 24.99, total: 249.9 },
	{ item: "Widget B", quantity: "5", unitPrice: 39.99, total: 199.95 },
	{ item: "Component C", quantity: "8", unitPrice: 14.99, total: 119.92 },
	{ item: "Accessory D", quantity: "3", unitPrice: 49.99, total: 149.97 },
];

export default function WithFooter() {
	return (
		<Container maxW="40rem">
			<Table.Root>
				<Table.Header>
					<Table.Row>
						{columns.map((col) => (
							<Table.ColumnHeader key={col}>{col}</Table.ColumnHeader>
						))}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{rows.map((row) => (
						<Table.Row key={row.item}>
							<Table.Cell>{row.item}</Table.Cell>
							<Table.Cell>{row.quantity}</Table.Cell>
							<Table.Cell>{`$${row.unitPrice}`}</Table.Cell>
							<Table.Cell>{`$${row.total}`}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
				<Table.Footer>
					<Table.Row>
						<Table.Cell>Total</Table.Cell>
						<Table.Cell>26</Table.Cell>
						<Table.Cell>{`$${rows.reduce((acc, row) => acc + row.unitPrice, 0)}`}</Table.Cell>
						<Table.Cell>{`$${rows.reduce((acc, row) => acc + row.total, 0)}`}</Table.Cell>
					</Table.Row>
				</Table.Footer>
			</Table.Root>
		</Container>
	);
}
