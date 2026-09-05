import { Format, Stack, Text } from "@elemnts-ui/react";

export default function Byte() {
	return (
		<Stack gap="8">
			<Text color="fg.tertiary">(1024 bytes)</Text>
			<Format.Byte value={1024} />
		</Stack>
	);
}
