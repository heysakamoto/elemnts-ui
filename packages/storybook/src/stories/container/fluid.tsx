import preview from "@.storybook/preview";
import { Container, DecorativeBox } from "@moto-ui/react";

const meta = preview.meta({
	title: "Fluid",
	component: Container,
});

export const Fluid = meta.story({
	args: {
		fluid: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Enable the fluid prop to make the container fill its parent's width.",
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
