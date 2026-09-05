import { Container, Skeleton, Stack } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Container maxW="20rem">
			<Stack gap="12" align="center">
				<Skeleton boxSize="48" />
				<Stack gap="8" direction="column" flexGrow="1">
					<Skeleton w="full" h="1.25rem" />
					<Skeleton w="80%" h="1rem" />
				</Stack>
			</Stack>
		</Container>
	);
}
