import { KbdRoot as Kbd, KbdItem } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Kbd,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The Kbd component displays keyboard keys and shortcuts for an action. Use Kbd.Item to represent individual keys or key combinations.",
			},
		},
	},
	render: () => (
		<Kbd>
			<KbdItem>⌘ K</KbdItem>
		</Kbd>
	),
});
