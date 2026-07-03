import { Anchor, Text } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Within text",
	component: Anchor,
});

export const WithinText = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the component inline a text to create a hyperlink.",
			},
		},
	},
	render: () => (
		<Text fontSize="14">
			Visit the <Anchor>Chakra UI</Anchor> website
		</Text>
	),
});
