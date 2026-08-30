import { Container, Field, Input } from "@moto-ui/react";

export default function HelperText() {
	return (
		<Container maxW="20rem">
			<Field>
				<Field.Label>Password</Field.Label>
				<Field.Input asChild>
					<Input placeholder="Enter your password" />
				</Field.Input>
				<Field.HelperText>Must be at least 8 characters long.</Field.HelperText>
			</Field>
		</Container>
	);
}
