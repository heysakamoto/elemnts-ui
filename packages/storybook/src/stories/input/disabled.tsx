import { Container, Input } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Disabled",
	component: Input,
});

export const Disabled = meta.story({
	args: {
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use the `disabled` prop to prevent user interaction with the input.",
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
