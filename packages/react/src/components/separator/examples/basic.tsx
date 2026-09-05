import { DecorativeBox, Separator, Stack } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Stack align="center" direction="column">
			<DecorativeBox boxSize="64" />
			<Separator w="12rem" my="8" orientation="horizontal" />
			<DecorativeBox boxSize="64" />
		</Stack>
	);
}
