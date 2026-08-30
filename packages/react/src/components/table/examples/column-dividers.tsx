import { Container, Table } from "@moto-ui/react";

const columns = ["ID", "Task", "Priority", "Assignee"];
const rows = [
	{
		id: "101",
		task: "Update user dashboard",
		priority: "High",
		assignee: "Alice",
	},
	{
		id: "102",
		task: "Fix navigation bug",
		priority: "Critical",
		assignee: "Bob",
	},
	{
		id: "103",
		task: "Design new onboarding flow",
		priority: "Medium",
		assignee: "Carol",
	},
	{
		id: "104",
		task: "API rate limiting",
		priority: "High",
		assignee: "Dave",
	},
	{
		id: "105",
		task: "Write integration tests",
		priority: "Low",
		assignee: "Eve",
	},
];

export default function ColumnDividers() {
	return (
		<Container maxW="40rem">
			<Table.Root showColumnDividers>
				<Table.Header>
					<Table.Row>
						{columns.map((col) => (
							<Table.ColumnHeader key={col}>{col}</Table.ColumnHeader>
						))}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{rows.map((row) => (
						<Table.Row key={row.id}>
							<Table.Cell>{row.id}</Table.Cell>
							<Table.Cell>{row.task}</Table.Cell>
							<Table.Cell>{row.priority}</Table.Cell>
							<Table.Cell>{row.assignee}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Container>
	);
}
