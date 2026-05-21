import { Container, Skeleton, Stack, Text } from "@moto-ui/react";

export function Variants() {
	return (
		<Container maxW="20rem">
			<Stack
				gap="8"
				align="center"
				justify="center"
			>
				<Stack
					gap="2"
					direction="column"
				>
					<Text fontSize="12">Pulse</Text>
					<Skeleton
						w="5rem"
						h=".8rem"
						effect="pulse"
					/>
				</Stack>

				<Stack
					gap="2"
					direction="column"
				>
					<Text fontSize="12">Shimmer</Text>
					<Skeleton
						w="5rem"
						h=".8rem"
						effect="shimmer"
					/>
				</Stack>
			</Stack>
		</Container>
	);
}
