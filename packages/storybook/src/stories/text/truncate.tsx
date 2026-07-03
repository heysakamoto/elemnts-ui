import { Text } from "@moto-ui/react";

import preview from "../../../.storybook/preview";

const meta = preview.meta({
	title: "Truncate",
	component: Text,
});

export const Truncate = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the `truncate` prop to limit the text to a single line.",
			},
		},
	},
	render: () => (
		<Text
			w="10rem"
			truncate
		>
			Sphinx of black quartz, judge my vow.
		</Text>
	),
});
