import { Icon, JsonTreeView, ScrollShadow } from "@elemnts-ui/react";

export function JsonTreeViewExample() {
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
		lastLogin: new Date().toISOString(),
		settings: null,
	};

	return (
		<ScrollShadow
			maxW="16rem"
			align="center"
			justify="center"
			display="flex"
			direction="column"
		>
			<JsonTreeView data={data} h="10rem" defaultExpandedDepth={1}>
				<JsonTreeView.Tree
					arrow={<Icon width={16} height={16} icon="tabler:chevron-right" />}
				/>
			</JsonTreeView>
		</ScrollShadow>
	);
}
