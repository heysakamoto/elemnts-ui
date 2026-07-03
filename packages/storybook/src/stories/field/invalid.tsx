import { Field, Input } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Invalid",
	component: Field,
});

export const Invalid = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the invalid prop on Field.Root to show the Field.ErrorText. This will also update the styling of the input to reflect the error state.",
			},
		},
	},
	args: {
		invalid: true,
	},
	render: (args) => (
		<Field.Root
			maxW="16rem"
			{...args}
		>
			<Field.Label>Email</Field.Label>
			<Field.Input
				defaultValue="invalid-email"
				asChild
			>
				<Input
					rounded="24"
					placeholder="Enter your email"
				/>
			</Field.Input>
			<Field.ErrorText>Please enter a valid email address.</Field.ErrorText>
		</Field.Root>
	),
});
