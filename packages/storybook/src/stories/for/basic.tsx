import { For, Stack, Text } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: For,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The For component provides a clean way to iterate over an array and render its items. It also supports a fallback UI when the array is empty.",
			},
		},
	},
	render: () => {
		const items = ["Apple", "Banana", "Cherry"];

		return (
			<Stack
				gap="2"
				direction="column"
			>
				<For each={items}>
					{(item, index) => (
						<Text key={index}>
							{index + 1}. {item}
						</Text>
					)}
				</For>
			</Stack>
		);
	},
});
