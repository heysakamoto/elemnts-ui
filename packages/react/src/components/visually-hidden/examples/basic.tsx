import { Container, Text, VisuallyHidden } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Container maxW="28rem">
			<Text>
				This text below is text that screen readers can read and understand but
				is visually hidden:
			</Text>
			<VisuallyHidden>
				This text is only accessible to screen readers.
			</VisuallyHidden>
		</Container>
	);
}
