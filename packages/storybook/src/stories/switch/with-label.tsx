import preview from "@.storybook/preview";
import { Switch } from "@moto-ui/react";

const meta = preview.meta({
	title: "With Label",
	component: Switch,
});

export const WithLabel = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Switch.Label component is used to provide a descriptive label for the switch, which is essential for accessibility.",
			},
		},
	},
	render: (args) => (
		<Switch.Root {...args}>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.Label>Keep chats archived</Switch.Label>
			<Switch.HiddenInput />
		</Switch.Root>
	),
});
