import { Switch } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Switch.Root>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.HiddenInput />
		</Switch.Root>
	);
}
