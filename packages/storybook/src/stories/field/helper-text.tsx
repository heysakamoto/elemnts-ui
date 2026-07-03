import { Field, Input } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Helper Text",
	component: Field,
});

export const HelperText = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use Field.HelperText to provide additional information or instructions for the user.",
			},
		},
	},
	render: (args) => (
		<Field.Root
			maxW="16rem"
			{...args}
		>
			<Field.Label>Password</Field.Label>
			<Field.Input asChild>
				<Input
					rounded="24"
					placeholder="Enter your password"
				/>
			</Field.Input>
			<Field.HelperText>Must be at least 8 characters long.</Field.HelperText>
		</Field.Root>
	),
});
