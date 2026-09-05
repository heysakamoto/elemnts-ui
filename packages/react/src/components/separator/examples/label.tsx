import { Separator, Stack, Text } from "@elemnts-ui/react";

export default function Label() {
	return (
		<Stack gap="8" align="center" direction="row">
			<Separator w="8rem" orientation="horizontal" />
			<Text color="fg.secondary">or sign in with</Text>
			<Separator w="8rem" orientation="horizontal" />
		</Stack>
	);
}
