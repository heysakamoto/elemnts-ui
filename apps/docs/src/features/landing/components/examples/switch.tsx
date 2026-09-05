import { Switch, VisuallyHidden } from "@elemnts-ui/react";

export function SwitchExample() {
	return (
		<Switch size="lg">
			<VisuallyHidden>
				<Switch.Label>Switch</Switch.Label>
			</VisuallyHidden>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.HiddenInput />
		</Switch>
	);
}
