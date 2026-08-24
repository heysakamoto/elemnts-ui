import { Locale, Stack, Text } from "@moto-ui/react";

export default function Basic() {
	return (
		<Stack
			gap="2"
			fontSize="14"
			justify="center"
		>
			<Text color="fg.tertiary">English (US)</Text>
			<Locale locale="ja-JP">
				<Text>1234.56</Text>
			</Locale>
		</Stack>
	);
}
