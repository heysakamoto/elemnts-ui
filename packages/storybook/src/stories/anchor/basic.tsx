import { Anchor } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Anchor,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Provides accessible navigation",
			},
		},
	},
	render: () => <Anchor>ark ui</Anchor>,
});
