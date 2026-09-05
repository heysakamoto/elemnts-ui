import { Status } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Status.Root colorPalette="success">
			<Status.Indicator />
			<Status.Text>Online</Status.Text>
		</Status.Root>
	);
}
