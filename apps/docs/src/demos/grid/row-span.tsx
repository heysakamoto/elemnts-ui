import { DecorativeBox, Grid, GridItem } from "@moto-ui/react";

export function RowSpan() {
	return (
		<Grid
			gap="8"
			cols="repeat(3, 1fr)"
			rows="repeat(4, 1fr)"
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
	);
}
