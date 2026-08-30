import { Status } from "@moto-ui/react";

export default function Basic() {
	return (
		<Status.Root colorPalette="success">
			<Status.Indicator />
			<Status.Text>Online</Status.Text>
		</Status.Root>
	);
}
