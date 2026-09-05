import { Format, Stack, Text } from "@elemnts-ui/react";

export default function Integer() {
	return (
		<Stack gap="8">
			<Text color="fg.tertiary">USD</Text>
			<Format.Number value={1234.56} style="currency" currency="USD" />
		</Stack>
	);
}
