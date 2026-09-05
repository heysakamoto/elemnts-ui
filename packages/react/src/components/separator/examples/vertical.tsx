import { DecorativeBox, Separator, Stack } from "@elemnts-ui/react";

export default function Vertical() {
	return (
		<Stack align="center" direction="row">
			<DecorativeBox boxSize="64" />
			<Separator h="4rem" mx="12" orientation="vertical" />
			<DecorativeBox boxSize="64" />
		</Stack>
	);
}
