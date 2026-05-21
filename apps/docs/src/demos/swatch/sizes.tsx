import { Stack, Swatch } from "@moto-ui/react";

export function Sizes() {
	return (
		<Stack
			direction="row"
			gap="8"
			alignItems="center"
		>
			<Swatch
				size="xs"
				bg="accent.primary"
			/>
			<Swatch
				size="sm"
				bg="accent.primary"
			/>
			<Swatch
				size="md"
				bg="accent.primary"
			/>
			<Swatch
				size="lg"
				bg="accent.primary"
			/>
			<Swatch
				size="xl"
				bg="accent.primary"
			/>
		</Stack>
	);
}
