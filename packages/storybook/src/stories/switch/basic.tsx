import preview from "@.storybook/preview";
import { Switch } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Switch,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Switch component is used to toggle between two states, typically on and off.",
			},
		},
	},
	render: (args) => (
		<Switch.Root {...args}>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.HiddenInput />
		</Switch.Root>
	),
});
