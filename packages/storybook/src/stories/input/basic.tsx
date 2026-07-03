import { Container, Input } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Input,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Input` component is a styled wrapper around the native `input` element, providing consistent styling across different states and variants.",
			},
		},
	},
	render: (args) => (
		<Container maxW="10rem">
			<Input
				rounded="24"
				placeholder="City"
				{...args}
			/>
		</Container>
	),
});
