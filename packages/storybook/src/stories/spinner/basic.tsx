import { Spinner } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Spinner,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Spinner component provides visual feedback to users that a task is in progress.",
			},
		},
	},
	render: (args) => <Spinner {...args} />,
});
