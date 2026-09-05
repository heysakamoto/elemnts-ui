import { Show, Stack, Text } from "@elemnts-ui/react";

type User = { name: string } | null;

export default function Fallback() {
	const user = null as User;

	return (
		<Stack gap="2" direction="column">
			<Text>A falsy condition renders the fallback:</Text>
			<Show
				when={user}
				fallback={<Text color="fg.muted">No user data available.</Text>}
			>
				<Text color="accent.solid">Hello, {user ? user.name : ""}</Text>
			</Show>
		</Stack>
	);
}
