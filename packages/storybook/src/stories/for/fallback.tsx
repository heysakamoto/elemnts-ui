import preview from "@.storybook/preview";
import { For, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Fallback",
	component: For,
});

export const Fallback = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The fallback prop allows you to render content when the each array is empty or undefined.",
			},
		},
	},
	render: () => {
		const items: string[] = [];

		return (
			<For
				each={items}
				fallback={<Text color="fg.muted">No items available.</Text>}
			>
				{(item, index) => <Text key={index}>{item}</Text>}
			</For>
		);
	},
});
