import { Format, Stack, Text } from "@moto-ui/react";

export function Integer() {
	return (
		<Stack
			gap="4"
			fontSize="14"
		>
			<Text color="fg.tertiary">USD</Text>
			<Format.Number
				value={1234.56}
				style="currency"
				currency="USD"
			/>
		</Stack>
	);
}
