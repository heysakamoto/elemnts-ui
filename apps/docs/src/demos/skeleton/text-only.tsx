import { Skeleton, Text } from "@moto-ui/react";

export function TextOnly() {
	return (
		<Text fontSize="12">
			<Skeleton textOnly>some important information</Skeleton>
		</Text>
	);
}
