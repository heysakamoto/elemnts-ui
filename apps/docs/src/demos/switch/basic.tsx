import { Switch } from "@moto-ui/react";

export function Basic() {
	return (
		<Switch.Root>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.HiddenInput />
		</Switch.Root>
	);
}
