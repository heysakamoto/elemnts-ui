import { Container, Icon, JsonTreeView } from "@moto-ui/react";

import preview from "@.storybook/preview";

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

const meta = preview.meta({
	title: "Basic",
	component: JsonTreeView,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The JsonTreeView component provides a convenient way to visualize complex JSON objects. It supports expanding/collapsing levels, custom rendering for values, and various data types.",
			},
		},
	},
	render: (args) => (
		<Container maxW="24rem">
			<JsonTreeView
				{...args}
				data={data}
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
	),
});
