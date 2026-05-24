import { Skeleton, Stack, Text } from "@moto-ui/react";

export function Loader() {
	return (
		<Stack direction="column">
			<Stack
				align="center"
				justify="space-between"
			>
				<Text fontSize={{ base: "24", md: "32" }}>
					<Skeleton textOnly>Component</Skeleton>
				</Text>
				<Skeleton
					w="8rem"
					h="2rem"
				/>
			</Stack>

			<Text mt="20">
				<Skeleton textOnly>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit.
				</Skeleton>
			</Text>

			<Skeleton
				mt="32"
				h="36rem"
			/>

			<Text mt="16">
				<Skeleton textOnly>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit.
				</Skeleton>
			</Text>
		</Stack>
	);
}
