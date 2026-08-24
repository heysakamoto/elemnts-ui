import { Stack, Swatch } from "@moto-ui/react";

export default function Basic() {
	return (
		<Stack
			direction="row"
			gap="8"
		>
			<Swatch bg="red.50" />
			<Swatch bg="blue.50" />
		</Stack>
	);
}
