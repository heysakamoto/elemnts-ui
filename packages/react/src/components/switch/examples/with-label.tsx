import { Switch } from "@elemnts-ui/react";

export default function WithLabel() {
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
