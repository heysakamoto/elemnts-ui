import { Text } from "@moto-ui/react";

import preview from "../../../.storybook/preview";

const meta = preview.meta({
	title: "LineClamp",
	component: Text,
});

export const LineClamp = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `lineClamp` prop to limit content to a specified number of lines, truncating any overflow.",
			},
		},
	},
	render: () => (
		<Text
			w="14rem"
			lineClamp={2}
		>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
			tempor
		</Text>
	),
});
