import { Switch } from "@moto-ui/react";

export function WithLabel() {
	return (
		<Switch.Root>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.Label>Keep chats archived</Switch.Label>
			<Switch.HiddenInput />
		</Switch.Root>
	);
}
