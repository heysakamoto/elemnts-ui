import { Status } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Status,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Status` component is used to communicate the status of an item or a process at a glance. It typically consists of a visual indicator (a dot) and an optional text label.",
			},
		},
	},
	render: (args) => (
		<Status.Root
			{...args}
			colorPalette="success"
		>
			<Status.Indicator />
			<Status.Text>Online</Status.Text>
		</Status.Root>
	),
});
