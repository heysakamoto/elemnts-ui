import { ClientOnly, Text } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<ClientOnly>
			<Text>Content only renders after hydration</Text>
		</ClientOnly>
	);
}
