import preview from "@.storybook/preview";
import { Container, Highlight, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Multiple",
	component: Highlight,
});

export const Multiple = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the query prop to an array of strings to highlight multiple substrings.",
			},
		},
	},
	render: () => (
		<Container maxW="20rem">
			<Text fontSize="14">
				<Highlight
					query={["spotlight", "emphasize", "accentuate"]}
					text="
          Use the Highlight component to spotlight, emphasize, and accentuate words.
          "
				/>
			</Text>
		</Container>
	),
});
