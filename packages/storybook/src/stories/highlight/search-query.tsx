import { Highlight, Stack, Text } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Search Query",
	component: Highlight,
});

const searchTerm = "code";
const items = ["Code editor", "Code review", "Code deployment"];

export const SearchQuery = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `Highlight` component to emphasize terms in search results that match the user's query.",
			},
		},
	},
	render: () => (
		<Stack
			gap="8"
			direction="column"
		>
			<Text
				fontSize="14"
				color="fg.tertiary"
			>
				Showing results for: code
			</Text>
			<Stack
				gap="1"
				direction="column"
			>
				{items.map((item) => (
					<Text
						key={item}
						fontSize="14"
					>
						<Highlight
							variant="tertiary"
							ignoreCase
							query={searchTerm}
							text={item}
						/>
					</Text>
				))}
			</Stack>
		</Stack>
	),
});
