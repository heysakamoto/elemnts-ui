import { Status } from "@moto-ui/react";

export function OnlyIndicator() {
	return (
		<Status.Root colorPalette="warning">
			<Status.Indicator />
		</Status.Root>
	);
}
