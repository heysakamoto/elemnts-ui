import { Container, Table } from "@elemnts-ui/react";

const columns = ["Month", "Visitors", "Conversions", "Revenue"];
const rows = [
	{
		month: "January",
		visitors: "12,430",
		conversions: "843",
		revenue: "$42,150",
	},
	{
		month: "February",
		visitors: "14,210",
		conversions: "912",
		revenue: "$45,600",
	},
	{
		month: "March",
		visitors: "16,870",
		conversions: "1,034",
		revenue: "$51,700",
	},
	{
		month: "April",
		visitors: "15,540",
		conversions: "987",
		revenue: "$49,350",
	},
];

export default function WithCaption() {
	return (
		<Container maxW="40rem">
			<Table.Root>
				<Table.Caption textAlign="center" mb="8">
					Q1 2025 Performance Metrics
				</Table.Caption>
				<Table.Header>
					<Table.Row>
						{columns.map((col) => (
							<Table.ColumnHeader key={col}>{col}</Table.ColumnHeader>
						))}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{rows.map((row) => (
						<Table.Row key={row.month}>
							<Table.Cell>{row.month}</Table.Cell>
							<Table.Cell>{row.visitors}</Table.Cell>
							<Table.Cell>{row.conversions}</Table.Cell>
							<Table.Cell>{row.revenue}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Container>
	);
}
