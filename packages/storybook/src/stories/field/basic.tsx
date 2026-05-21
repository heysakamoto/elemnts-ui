import preview from "@.storybook/preview";
import { Field, Input } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Field,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Field component is used to wrap form elements like Input, Textarea, or Select to provide additional context like labels and status messages.",
			},
		},
	},
	render: (args) => (
		<Field.Root
			maxW="16rem"
			{...args}
		>
			<Field.Label>Username</Field.Label>
			<Field.Input asChild>
				<Input
					rounded="24"
					placeholder="Enter your username"
				/>
			</Field.Input>
		</Field.Root>
	),
});
