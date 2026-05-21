import preview from "@.storybook/preview";
import { Button, Group } from "@moto-ui/react";

const meta = preview.meta({
	title: "Button Group",
	component: Group,
});

export const ButtonGroup = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"An example demonstrating how to use the Group component to arrange multiple buttons with consistent spacing.",
			},
		},
	},
	render: (args) => (
		<Group {...args}>
			<Button
				rounded="calc(24px - 8px)"
				variant="tertiary"
			>
				Premium
			</Button>
			<Button
				rounded="calc(24px - 8px)"
				variant="tertiary"
			>
				Free
			</Button>
		</Group>
	),
});
