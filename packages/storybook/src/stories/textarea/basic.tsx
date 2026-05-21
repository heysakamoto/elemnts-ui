import preview from "@.storybook/preview";
import { Container, Textarea } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Textarea,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Textarea component is a styled wrapper around the native textarea element, providing consistent styling across different states and variants.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Textarea
				{...args}
				rounded="16"
				placeholder="Type your message here..."
			/>
		</Container>
	),
});
