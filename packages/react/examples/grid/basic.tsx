import { DecorativeBox, Grid } from "@moto-ui/react";

export default function Basic() {
	return (
		<Grid
			gap="8"
			cols="repeat(3, 1fr)"
		>
			<DecorativeBox h="56" />
			<DecorativeBox h="56" />
			<DecorativeBox h="56" />
		</Grid>
	);
}
