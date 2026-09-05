import { Format, Stack, Text } from "@elemnts-ui/react";

export default function RelativeTime() {
	return (
		<Stack gap="8">
			<Text color="fg.tertiary">48 hours ago</Text>
			<Format.RelativeTime
				value={new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)}
			/>
		</Stack>
	);
}
