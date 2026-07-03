import { DecorativeBox, Grid } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Grid,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the Grid component to create grid layouts.",
			},
		},
	},
	render: (args) => (
		<Grid
			gap="8"
			cols="repeat(3, 1fr)"
			{...args}
		>
			<DecorativeBox h="56" />
			<DecorativeBox h="56" />
			<DecorativeBox h="56" />
		</Grid>
	),
});
