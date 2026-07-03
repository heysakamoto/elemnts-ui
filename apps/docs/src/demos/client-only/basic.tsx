import { ClientOnly, Container, Text } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="28rem">
			<Text fontSize="14">
				Content inside ClientOnly only renders after hydration:
			</Text>
			<ClientOnly>
				<Text
					fontSize="14"
					color="accent.primary"
				>
					I am rendered on the client only.
				</Text>
			</ClientOnly>
		</Container>
	);
}
