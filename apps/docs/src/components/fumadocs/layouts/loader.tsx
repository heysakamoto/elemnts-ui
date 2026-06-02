import { Skeleton, Stack, Text } from "@moto-ui/react";

export function DocsLayoutLoader() {
	return (
		<Stack direction="column">
			<Text
				lineHeight="1"
				fontSize={{ base: "24", md: "32" }}
			>
				<Skeleton textOnly>Component</Skeleton>
			</Text>

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
