import { Container, Textarea } from "@moto-ui/react";

export default function Disabled() {
	return (
		<Container maxW="20rem">
			<Textarea
				disabled
				placeholder="Type your message here..."
			/>
		</Container>
	);
}
