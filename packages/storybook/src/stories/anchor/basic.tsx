import preview from "@.storybook/preview";
import { Anchor } from "@moto-ui/react";

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
