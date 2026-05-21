import { Container, Textarea } from "@moto-ui/react";

export const Disabled = () => {
	return (
		<Container maxW="20rem">
			<Textarea
				rounded="16"
				disabled
				placeholder="Type your message here..."
			/>
		</Container>
	);
};
