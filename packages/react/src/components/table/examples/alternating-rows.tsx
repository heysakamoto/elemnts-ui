import { Container, Table } from "@elemnts-ui/react";

const columns = ["Product", "Category", "Price", "Stock"];
const rows = [
	{
		product: "Wireless Mouse",
		category: "Electronics",
		price: "$29.99",
		stock: "142",
	},
	{
		product: "Desk Lamp",
		category: "Furniture",
		price: "$59.99",
		stock: "83",
	},
	{
		product: "Notebook Set",
		category: "Stationery",
		price: "$14.99",
		stock: "256",
	},
	{
		product: "USB-C Hub",
		category: "Electronics",
		price: "$39.99",
		stock: "67",
	},
	{
		product: "Coffee Mug",
		category: "Kitchen",
		price: "$19.99",
		stock: "189",
	},
	{
		product: "Monitor Stand",
		category: "Furniture",
		price: "$49.99",
		stock: "45",
	},
];

export default function AlternatingRows() {
	return (
		<Container maxW="40rem">
			<Table.Root alternatingRows>
				<Table.Header>
					<Table.Row>
						{columns.map((col) => (
							<Table.ColumnHeader key={col}>{col}</Table.ColumnHeader>
						))}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{rows.map((row) => (
						<Table.Row key={row.product}>
							<Table.Cell>{row.product}</Table.Cell>
							<Table.Cell>{row.category}</Table.Cell>
							<Table.Cell>{row.price}</Table.Cell>
							<Table.Cell>{row.stock}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Container>
	);
}
