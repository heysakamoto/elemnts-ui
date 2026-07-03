import { Container, Table } from "@moto-ui/react";

const columns = ["ID", "Department", "Role"];

const rows = Array.from({ length: 20 }, (_, idx) => ({
	id: `${idx + 1}`,
	department:
		idx % 3 === 0 ? "Engineering" : idx % 3 === 1 ? "Design" : "Marketing",
	role: idx % 2 === 0 ? "Senior" : "Junior",
}));

export function PinnedHeader() {
	return (
		<Container
			maxW="40rem"
			h="20rem"
			overflow="auto"
			scrollbar="hidden"
		>
			<Table.Root pinnedHeader>
				<Table.Header>
					<Table.Row bgColor="surface.4">
						{columns.map((col) => (
							<Table.ColumnHeader key={col}>{col}</Table.ColumnHeader>
						))}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{rows.map((row) => (
						<Table.Row key={row.id}>
							<Table.Cell>{row.id}</Table.Cell>
							<Table.Cell>{row.department}</Table.Cell>
							<Table.Cell>{row.role}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Container>
	);
}
