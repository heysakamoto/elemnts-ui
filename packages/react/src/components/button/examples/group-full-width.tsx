import { ButtonGroup, Container } from "@elemnts-ui/react";

export default function FullWidth() {
	return (
		<Container maxW="24rem">
			<ButtonGroup fullWidth attached variant="surface">
				<ButtonGroup.Item>Fix error</ButtonGroup.Item>
				<ButtonGroup.Item>Ignore</ButtonGroup.Item>
			</ButtonGroup>
		</Container>
	);
}
