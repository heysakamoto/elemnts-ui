import { Stack, Status } from "@moto-ui/react";

export function Sizes() {
	return (
		<Stack
			gap="8"
			alignItems="flex-start"
		>
			<Status.Root size="sm">
				<Status.Indicator />
				<Status.Text>Small</Status.Text>
			</Status.Root>
			<Status.Root size="md">
				<Status.Indicator />
				<Status.Text>Medium</Status.Text>
			</Status.Root>
			<Status.Root size="lg">
				<Status.Indicator />
				<Status.Text>Large</Status.Text>
			</Status.Root>
		</Stack>
	);
}
