import { DecorativeBox, Grid, GridItem } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "ColSpan",
	component: Grid,
});

export const ColSpan = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Set the colSpan prop on GridItem to control how many columns it spans.",
			},
		},
	},
	render: (args) => (
		<Grid
			gap="8"
			cols="repeat(3, 1fr)"
			{...args}
		>
			<GridItem column="span 2">
				<DecorativeBox h="56" />
			</GridItem>
			<GridItem column="span 1">
				<DecorativeBox h="56" />
			</GridItem>
		</Grid>
	),
});
