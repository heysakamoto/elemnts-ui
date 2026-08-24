import { Container, DecorativeBox, Stack } from "@moto-ui/react";

export default function Sizes() {
	return (
		<Stack
			w="full"
			direction="column"
			gap="12"
		>
			<Container maxW="16rem">
				<DecorativeBox h="64" />
			</Container>
			<Container maxW="20rem">
				<DecorativeBox h="64" />
			</Container>
			<Container maxW="24rem">
				<DecorativeBox h="64" />
			</Container>
		</Stack>
	);
}
