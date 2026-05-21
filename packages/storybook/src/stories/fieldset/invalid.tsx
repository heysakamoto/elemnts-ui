import preview from "@.storybook/preview";
import { Field, Fieldset, Input, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Invalid",
	component: Fieldset,
});

export const Invalid = meta.story({
	args: {
		invalid: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"The `Fieldset` can be marked as invalid to indicate that there are errors within the group.",
			},
		},
	},
	render: (args) => (
		<Fieldset.Root {...args}>
			<Fieldset.Legend>Contact Details</Fieldset.Legend>
			<Fieldset.HelperText>Please fix the errors below.</Fieldset.HelperText>
			<Stack
				pt="12"
				gap="12"
				direction="column"
			>
				<Field invalid>
					<Field.Label>Name</Field.Label>
					<Input
						rounded="24"
						placeholder="John Doe"
					/>
					<Field.ErrorText>Enter a valid name</Field.ErrorText>
				</Field>
				<Field invalid>
					<Field.Label>Email</Field.Label>
					<Input
						type="email"
						rounded="24"
						placeholder="john@example.com"
					/>
					<Field.ErrorText>Enter a valid email</Field.ErrorText>
				</Field>
			</Stack>
		</Fieldset.Root>
	),
});
