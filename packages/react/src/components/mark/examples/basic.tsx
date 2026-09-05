import { Container, Mark, Text } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Container maxW="28rem">
			<Text fontSize="16">
				Use the <Mark>highlight</Mark> component to highlight important terms in
				your text.
			</Text>
		</Container>
	);
}
