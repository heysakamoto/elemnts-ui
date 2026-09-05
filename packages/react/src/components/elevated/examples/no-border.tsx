import { Container, Elevated } from "@elemnts-ui/react";

export default function NoBorder() {
	return (
		<Container maxW="24rem">
			<Elevated py="8" px="16" delta={2} rounded="8" withBorder={false}>
				Elevation Level 3 (Without Border)
			</Elevated>
		</Container>
	);
}
