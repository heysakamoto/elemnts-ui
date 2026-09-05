import { Container, Field, Input } from "@elemnts-ui/react";

export default function Disabled() {
	return (
		<Container maxW="20rem">
			<Field disabled>
				<Field.Label>Username</Field.Label>
				<Field.Input asChild>
					<Input placeholder="Enter your username" />
				</Field.Input>
			</Field>
		</Container>
	);
}
