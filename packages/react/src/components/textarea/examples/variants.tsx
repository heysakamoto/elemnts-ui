import { Container, For, Textarea } from "@elemnts-ui/react";

export default function Variants() {
	return (
		<Container maxW="20rem">
			<For each={["primary", "secondary", "tertiary"]}>
				{(variant) => (
					<Textarea variant={variant} placeholder="Type your message here..." />
				)}
			</For>
		</Container>
	);
}
