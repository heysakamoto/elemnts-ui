import preview from "@.storybook/preview";
import { Container, DecorativeBox, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Sizes",
	component: Container,
});

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Control the container’s max width with the size prop.",
			},
		},
	},
	render: (args) => (
		<Stack
			w="full"
			direction="column"
			gap="12"
		>
			<Container
				maxW="16rem"
				{...args}
			>
				<DecorativeBox h="64" />
			</Container>
			<Container
				maxW="20rem"
				{...args}
			>
				<DecorativeBox h="64" />
			</Container>
			<Container
				maxW="24rem"
				{...args}
			>
				<DecorativeBox h="64" />
			</Container>
		</Stack>
	),
});
