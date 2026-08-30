import { Chip, Container, Skeleton, Stack } from "@moto-ui/react";

export default function Variants() {
	return (
		<Container
			maxW="24rem"
			spaceY="24"
		>
			<Stack
				w="full"
				gap="8"
				direction="column"
			>
				<Chip size="xs">Pulse</Chip>
				<Skeleton
					w="full"
					h="1.25rem"
					effect="pulse"
				/>
			</Stack>

			<Stack
				w="full"
				gap="8"
				direction="column"
			>
				<Chip size="xs">Shimmer</Chip>
				<Skeleton
					w="full"
					h="1.25rem"
					effect="shimmer"
				/>
			</Stack>
		</Container>
	);
}
