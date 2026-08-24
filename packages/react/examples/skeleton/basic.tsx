import { Skeleton, Stack } from "@moto-ui/react";

export default function Basic() {
	return (
		<Stack
			gap="4"
			w="full"
			maxW="300px"
		>
			<Skeleton
				h="1.5rem"
				w="60%"
			/>
			<Skeleton
				h="1.5rem"
				w="40%"
			/>
		</Stack>
	);
}
