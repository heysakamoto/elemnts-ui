import { Container, Field, Input } from "@moto-ui/react";

export default function Invalid() {
	return (
		<Container maxW="20rem">
			<Field invalid>
				<Field.Label>Email</Field.Label>
				<Field.Input
					defaultValue="invalid-email"
					asChild
				>
					<Input placeholder="Enter your email" />
				</Field.Input>
				<Field.ErrorText>Please enter a valid email address.</Field.ErrorText>
			</Field>
		</Container>
	);
}
