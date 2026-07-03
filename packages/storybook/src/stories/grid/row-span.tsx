import { DecorativeBox, Grid, GridItem } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "RowSpan",
	component: Grid,
});

export const RowSpan = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the rowSpan prop on GridItem to control how many rows it spans.",
			},
		},
	},
	render: (args) => (
		<Grid
			gap="8"
			cols="repeat(3, 1fr)"
			rows="repeat(4, 1fr)"
			{...args}
		>
			<GridItem row="span 4">
				<DecorativeBox h="full" />
			</GridItem>
			<GridItem
				column="span 2"
				row="span 1"
			>
				<DecorativeBox h="56" />
			</GridItem>
			<GridItem
				column="span 2"
				row="span 3"
			>
				<DecorativeBox h="full" />
			</GridItem>
		</Grid>
	),
});
