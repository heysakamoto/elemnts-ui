import { Switch } from "@elemnts-ui/react";

export default function Disabled() {
	return (
		<Switch.Root disabled>
			<Switch.Control>
				<Switch.Thumb />
			</Switch.Control>
			<Switch.HiddenInput />
		</Switch.Root>
	);
}
