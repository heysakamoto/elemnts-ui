import { Field, Fieldset, Input, Stack } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Fieldset,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Fieldset` component is used to group related form elements and provide a caption (legend) for the group.",
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
