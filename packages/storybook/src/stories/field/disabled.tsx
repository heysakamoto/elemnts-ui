import preview from "@.storybook/preview";
import { Field, Input } from "@moto-ui/react";

const meta = preview.meta({
	title: "Disabled",
	component: Field,
});

export const Disabled = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the disabled prop on Field.Root to disable the entire field. This will also apply the disabled styling to all child components, such as the label and input.",
			},
		},
	},
	args: {
		disabled: true,
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
