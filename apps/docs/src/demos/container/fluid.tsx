import { Container, DecorativeBox } from "@moto-ui/react";

export function Fluid() {
	return (
		<Container
			maxW="20rem"
			fluid
		>
			<DecorativeBox h="64" />
		</Container>
	);
}
