import { Show, Stack, Text } from "@moto-ui/react";

export const RenderFn = () => {
	const user = { name: "Jane", role: "Admin" };

	return (
		<Stack
			gap="2"
			direction="column"
		>
			<Text>Using a render function to access the truthy value:</Text>
			<Show when={user}>
				{(user) => (
					<Stack
						gap="1"
						direction="column"
					>
						<Text fontWeight="bold">{user.name}</Text>
						<Text
							color="fg.muted"
							fontSize="sm"
						>
							{user.role}
						</Text>
					</Stack>
				)}
			</Show>
		</Stack>
	);
};
