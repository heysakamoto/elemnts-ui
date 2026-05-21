import { Format, Stack, Text } from "@moto-ui/react";

export function Byte() {
	return (
		<Stack
			gap="4"
			fontSize="14"
		>
			<Text color="fg.tertiary">(1024 bytes)</Text>
			<Format.Byte value={1024} />
		</Stack>
	);
}
