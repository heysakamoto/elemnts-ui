import preview from "@.storybook/preview";
import { Highlight, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Highlight,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `Highlight` component to emphasize substrings in text that match the provided query.",
			},
		},
	},
	render: () => (
		<Text fontSize="14">
			<Highlight
				query="spotlight"
				text="
        The Highlight component lets you spotlight words.
        "
			/>
		</Text>
	),
});
