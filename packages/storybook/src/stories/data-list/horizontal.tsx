import { Container, DataList } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Horizontal",
	component: DataList,
	args: {
		orientation: "horizontal",
	},
});

export const Horizontal = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Control the layout of the data list with the `orientation` prop. Supported values are `vertical` (default) and `horizontal`.",
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
