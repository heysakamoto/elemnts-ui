import { Button, Container, Editable, Input } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Container maxW="20rem">
			<Editable placeholder="Click to edit" defaultValue="Hello World">
				<Editable.Area>
					<Button asChild variant="ghost" fontSize="16">
						<Editable.Preview />
					</Button>
					<Editable.Input asChild>
						<Input fontSize="16" />
					</Editable.Input>
				</Editable.Area>
			</Editable>
		</Container>
	);
}
