"use client";

import { Container, Table } from "@elemnts-ui/react";
import { useState } from "react";

const columns = ["Name", "Role", "Department"];

const rows = [
	{ name: "Alice Chen", role: "Frontend Developer", department: "Engineering" },
	{ name: "Bob Martinez", role: "UX Designer", department: "Design" },
	{
		name: "Charlie Park",
		role: "Backend Developer",
		department: "Engineering",
	},
	{ name: "Diana Lopez", role: "Product Manager", department: "Product" },
	{ name: "Edward Kim", role: "DevOps Engineer", department: "Operations" },
];

export default function Interactive() {
	const [selectedRow, setSelectedRow] = useState<string | null>(null);

	return (
		<Container maxW="40rem">
			<Table.Root interactive>
				<Table.Header>
					<Table.Row>
						{columns.map((col) => (
							<Table.ColumnHeader key={col}>{col}</Table.ColumnHeader>
						))}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{rows.map((row) => (
						<Table.Row
							key={row.name}
							onClick={() => setSelectedRow(row.name)}
							cursor="pointer"
							{...(selectedRow === row.name && {
								bgColor: "colorPalette.subtle",
							})}
						>
							<Table.Cell>{row.name}</Table.Cell>
							<Table.Cell>{row.role}</Table.Cell>
							<Table.Cell>{row.department}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Root>
		</Container>
	);
}
