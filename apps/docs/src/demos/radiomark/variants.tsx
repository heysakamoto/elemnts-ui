import { Radiomark, Stack } from "@moto-ui/react";

export function Variants() {
	return (
		<Stack
			direction="row"
			gap="4"
			alignItems="center"
		>
			<Radiomark
				checked
				size="xs"
			/>
			<Radiomark
				checked
				size="sm"
			/>
			<Radiomark
				checked
				size="md"
			/>
			<Radiomark
				checked
				size="lg"
			/>
			<Radiomark
				checked
				size="xl"
			/>
		</Stack>
	);
}
