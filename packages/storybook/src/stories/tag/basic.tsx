import { Tag } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Tag,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Tag` component is used to label, categorize, or organize items using keywords that describe them.",
			},
		},
	},
	render: () => <Tag>Default Tag</Tag>,
});
