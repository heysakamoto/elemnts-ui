import { DecorativeBox, Separator, Stack } from "@moto-ui/react";

export function Vertical() {
	return (
		<Stack
			align="center"
			direction="row"
		>
			<DecorativeBox boxSize="64" />
			<Separator
				h="4rem"
				mx="12"
				orientation="vertical"
			/>
			<DecorativeBox boxSize="64" />
		</Stack>
	);
}
