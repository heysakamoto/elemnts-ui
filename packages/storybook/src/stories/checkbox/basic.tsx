import preview from "@.storybook/preview";
import { Checkbox, Icon } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Checkbox,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Checkbox component is used to allow users to select one or more options from a set.",
			},
		},
	},
	render: (args) => (
		<Checkbox.Root {...args}>
			<Checkbox.Control>
				<Checkbox.Indicator>
					<Icon
						icon="tabler:check"
						width={12}
						height={12}
					/>
				</Checkbox.Indicator>
			</Checkbox.Control>
			<Checkbox.Label>Do you agree to the terms and conditions?</Checkbox.Label>
			<Checkbox.HiddenInput />
		</Checkbox.Root>
	),
});
