import preview from "@.storybook/preview";
import { Field, Fieldset, Input, Stack } from "@moto-ui/react";

const meta = preview.meta({
	title: "Disabled",
	component: Fieldset,
});

export const Disabled = meta.story({
	args: {
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					"When the `Fieldset` is disabled, all of its children form fields will also be disabled.",
			},
		},
	},
	render: (args) => (
		<Fieldset.Root {...args}>
			<Fieldset.Legend>Contact Details</Fieldset.Legend>
			<Fieldset.HelperText>
				Please provide your contact information.
			</Fieldset.HelperText>
			<Stack
				pt="12"
				gap="12"
				direction="column"
			>
				<Field>
					<Field.Label>Name</Field.Label>
					<Input
						rounded="24"
						placeholder="John Doe"
					/>
				</Field>
				<Field>
					<Field.Label>Email</Field.Label>
					<Input
						type="email"
						rounded="24"
						placeholder="john@example.com"
					/>
				</Field>
			</Stack>
		</Fieldset.Root>
	),
});
