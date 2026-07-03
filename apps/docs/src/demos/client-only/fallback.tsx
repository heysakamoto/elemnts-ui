import { ClientOnly, Container, Text } from "@moto-ui/react";

export function Fallback() {
	return (
		<Container maxW="28rem">
			<Text fontSize="14">
				Fallback is shown during SSR and before hydration completes:
			</Text>
			<ClientOnly fallback={<Text color="fg.muted">Loading…</Text>}>
				<Text
					fontSize="14"
					color="accent.primary"
				>
					Client-side content is ready.
				</Text>
			</ClientOnly>
		</Container>
	);
}
