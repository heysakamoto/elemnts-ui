import preview from "@.storybook/preview";
import { Box } from "@moto-ui/react";

const meta = preview.meta({
	title: "Shorthand",
	component: Box,
});

export const Shorthand = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use shorthand props such as bgColor for backgroundColor and p for padding to write styles more concisely.",
			},
		},
	},
	args: {
		p: "4",
		boxSize: "48",
		rounded: "24",
		bgColor: "bg.secondary",
	},
	render: (args) => <Box {...args} />,
});
