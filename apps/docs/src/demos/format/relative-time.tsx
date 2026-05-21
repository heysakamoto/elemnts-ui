import { Format, Stack, Text } from "@moto-ui/react";

export function RelativeTime() {
	return (
		<Stack
			gap="4"
			fontSize="14"
		>
			<Text color="fg.tertiary">48 hours ago</Text>
			<Format.RelativeTime
				value={new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)}
			/>
		</Stack>
	);
}
