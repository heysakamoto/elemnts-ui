import { DecorativeBox } from "@moto-ui/react";

import preview from "../../../.storybook/preview";

const meta = preview.meta({
	title: "Variants",
	component: DecorativeBox,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `DecorativeBox` comes with two variants: `primary` (default) and `secondary`.",
			},
		},
	},
	render: () => (
		<DecorativeBox variant="secondary">Secondary Box</DecorativeBox>
	),
});
