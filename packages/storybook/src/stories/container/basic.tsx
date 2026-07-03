import { Container, DecorativeBox } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Container,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Container component centers content and constrains its maximum width to the current breakpoint—fluid below that size. Use it to wrap pages or sections so content doesn’t stretch edge to edge on wide screens.",
			},
		},
	},
	render: (args) => (
		<Container
			maxW="20rem"
			{...args}
		>
			<DecorativeBox h="64" />
		</Container>
	),
});
