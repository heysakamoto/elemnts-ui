import { Show, Stack, Text } from "@moto-ui/react";

export const Basic = () => {
	const isLoggedIn = true;

	return (
		<Stack
			gap="2"
			direction="column"
		>
			<Text>A truthy condition will render the children:</Text>
			<Show when={isLoggedIn}>
				<Text color="accent.solid">Welcome back, user!</Text>
			</Show>
		</Stack>
	);
};
