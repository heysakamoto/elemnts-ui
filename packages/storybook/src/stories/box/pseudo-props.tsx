import { Box } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Pseudo Props",
	component: Box,
});

export const PseudoProps = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use pseudo props like _hover to style an element on hover, _active to style it on active, and more.",
			},
		},
	},
	args: {},
	render: (args) => (
		<Box
			{...args}
			p="4"
			boxSize="48px"
			rounded="24"
			bgColor="bg.secondary"
			_hover={{ bgColor: "gray.30" }}
			_active={{ shadow: "0 0 0 2px {colors.accent.primary}" }}
		/>
	),
});
