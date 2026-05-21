import { DecorativeBox, Grid, GridItem } from "@moto-ui/react";

export function ColSpan() {
	return (
		<Grid
			gap="8"
			cols="repeat(3, 1fr)"
		>
			<GridItem column="span 2">
				<DecorativeBox h="56" />
			</GridItem>
			<GridItem column="span 1">
				<DecorativeBox h="56" />
			</GridItem>
		</Grid>
	);
}
