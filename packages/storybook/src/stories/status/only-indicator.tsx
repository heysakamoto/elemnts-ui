import preview from "@.storybook/preview";
import { Status } from "@moto-ui/react";

const meta = preview.meta({
	title: "Only Indicator",
	component: Status,
});

export const OnlyIndicator = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can use the indicator without text for a more compact representation.",
			},
		},
	},
	render: (args) => (
		<Status.Root
			{...args}
			colorPalette="warning"
		>
			<Status.Indicator />
		</Status.Root>
	),
});
