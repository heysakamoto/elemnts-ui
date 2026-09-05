import { Button, Container, Group } from "@elemnts-ui/react";

export default function FullWidth() {
	return (
		<Container maxW="28rem">
			<Group fullWidth>
				<Button variant="tertiary">Professional</Button>
				<Button variant="tertiary">Premium</Button>
				<Button variant="tertiary">Freemium</Button>
			</Group>
		</Container>
	);
}
