import preview from "@.storybook/preview";
import { Container, DataList } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: DataList,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use `DataList` to display key-value pairs, such as user information, product specifications, or metadata.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<DataList {...args}>
				<DataList.Item>
					<DataList.ItemLabel>Name</DataList.ItemLabel>
					<DataList.ItemValue>Moto UI</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>Description</DataList.ItemLabel>
					<DataList.ItemValue>
						A React component library built with Ark UI and Panda CSS.
					</DataList.ItemValue>
				</DataList.Item>
				<DataList.Item>
					<DataList.ItemLabel>License</DataList.ItemLabel>
					<DataList.ItemValue>MIT</DataList.ItemValue>
				</DataList.Item>
			</DataList>
		</Container>
	),
});
