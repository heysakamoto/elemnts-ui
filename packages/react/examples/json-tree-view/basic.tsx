import { Container, Icon, JsonTreeView } from "@moto-ui/react";

export default function Basic() {
	const data = {
		name: "John Doe",
		age: 30,
		email: "john.doe@example.com",
		isDeveloper: true,
		skills: ["React", "TypeScript", "Panda CSS"],
		address: {
			street: "123 Main St",
			city: "Anytown",
			zip: "12345",
		},
		projects: [
			{ id: 1, name: "Project Alpha", status: "completed" },
			{ id: 2, name: "Project Beta", status: "in-progress" },
		],
		lastLogin: new Date().toISOString(),
		settings: null,
	};

	return (
		<Container maxW="24rem">
			<JsonTreeView
				data={data}
				defaultExpandedDepth={1}
			>
				<JsonTreeView.Tree
					arrow={
						<Icon
							icon="tabler:chevron-right"
							width={16}
							height={16}
						/>
					}
				/>
			</JsonTreeView>
		</Container>
	);
}
