import { Show, Stack, Text } from "@moto-ui/react";

export const Nested = () => {
	const session = { user: { name: "Alice", preferences: { theme: "dark" } } };

	return (
		<Stack
			gap="2"
			direction="column"
		>
			<Text>Nested conditional rendering:</Text>
			<Show when={session}>
				{(session) => (
					<Show when={session.user}>
						{(user) => (
							<Stack gap="1">
								<Text fontWeight="bold">{user.name}</Text>
								<Text
									color="fg.muted"
									fontSize="sm"
								>
									Theme: {user.preferences.theme}
								</Text>
							</Stack>
						)}
					</Show>
				)}
			</Show>
		</Stack>
	);
};
