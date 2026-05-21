import preview from "@.storybook/preview";
import { Switch } from "@moto-ui/react";

const meta = preview.meta({
	title: "Disabled",
	component: Switch,
});

export const Disabled = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the disabled prop on Switch.Root to make the switch non-interactive.",
			},
		},
	},
	render: (args) => (
		<Switch.Root
			{...args}
			disabled
		>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.HiddenInput />
		</Switch.Root>
	),
});
