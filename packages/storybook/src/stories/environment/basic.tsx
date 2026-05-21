import preview from "@.storybook/preview";
import { Container, Environment, Surface, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Environment,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Environment component (internally EnvironmentProvider) is a utility that provides the current environment's window, document, and rootNode to all child components. This is essential for components that rely on DOM APIs to function correctly when rendered inside an iframe, Shadow DOM, or other isolated environments.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Environment {...args}>
				<Surface
					p="12"
					delta={1}
					rounded="24"
				>
					<Text fontSize="14">
						The components inside this provider will use the environment
						(window, document) provided by the Environment component.
					</Text>
				</Surface>
			</Environment>
		</Container>
	),
});
