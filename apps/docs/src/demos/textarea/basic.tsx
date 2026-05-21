import { Container, Textarea } from "@moto-ui/react";

export const Basic = () => {
	return (
		<Container maxW="20rem">
			<Textarea
				rounded="16"
				placeholder="Type your message here..."
			/>
		</Container>
	);
};
