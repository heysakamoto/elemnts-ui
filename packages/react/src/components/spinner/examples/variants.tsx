import { Spinner, Stack } from "@moto-ui/react";

export default function Variants() {
	return (
		<Stack
			direction="row"
			gap="4"
			alignItems="center"
		>
			<Spinner colorPalette="accent" />
			<Spinner colorPalette="success" />
			<Spinner colorPalette="warning" />
			<Spinner colorPalette="destructive" />
			<Spinner colorPalette="neutral" />
		</Stack>
	);
}
