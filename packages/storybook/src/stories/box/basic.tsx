import preview from "@.storybook/preview";
import { Box } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Box,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Box component offers a straightforward approach to applying styles effortlessly. It grants access to design tokens and delivers exceptional developer experience when crafting responsive styles.",
			},
		},
	},
	args: {
		boxSize: "48",
		rounded: "24",
		border: "1px solid {colors.stroke.primary}",
	},
	render: (args) => <Box {...args} />,
});
