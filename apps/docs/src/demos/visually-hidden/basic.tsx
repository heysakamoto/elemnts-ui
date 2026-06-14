import { Container, Text, VisuallyHidden } from "@moto-ui/react";

export const Basic = () => {
	return (
		<Container maxW="20rem">
			<Text fontSize="14">
				This text below is text that screen readers can read and understand but
				is visually hidden:
			</Text>
			<VisuallyHidden>
				This text is only accessible to screen readers.
			</VisuallyHidden>
		</Container>
	);
};
