import { Button, Group } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Attached",
	component: Group,
});

export const Attached = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the `attached` prop to visually connect the children.",
			},
		},
	},
	render: (args) => (
		<Group
			{...args}
			attached
		>
			<Button variant="tertiary">Premium</Button>
			<Button variant="tertiary">Free</Button>
		</Group>
	),
});
