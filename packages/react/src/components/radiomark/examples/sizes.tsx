import { Radiomark, Stack } from "@moto-ui/react";

export default function Sizes() {
	return (
		<Stack
			direction="row"
			gap="8"
			align="center"
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
