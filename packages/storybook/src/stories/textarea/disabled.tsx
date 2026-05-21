import preview from "@.storybook/preview";
import { Container, Textarea } from "@moto-ui/react";

const meta = preview.meta({
	title: "Disabled",
	component: Textarea,
});

export const Disabled = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the disabled prop to prevent user interaction with the textarea.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Textarea
				{...args}
				rounded="16"
				disabled
				placeholder="Type your message here..."
			/>
		</Container>
	),
});
