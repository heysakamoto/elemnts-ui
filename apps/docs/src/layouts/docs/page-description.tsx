import { Text } from "@moto-ui/react";
import type { PropsWithChildren } from "react";

export function DocsLayoutPageDescription(props: PropsWithChildren) {
	const { children } = props;

	return (
		<Text
			mt="20"
			mb="32"
			lineHeight="md"
			color="fg.primary"
			letterSpacing="sm"
			fontSize={{ base: "16", md: "18" }}
		>
			{children}
		</Text>
	);
}
