import { Stack, Text } from "@moto-ui/react";
import type { PropsWithChildren } from "react";

import { DocsLayoutAiButtons } from "./ai";

export function DocsLayoutPageTitle(props: PropsWithChildren) {
	const { children } = props;

	return (
		<Stack
			align="center"
			justify="space-between"
		>
			<Text
				as="h1"
				lineHeight="none"
				color="fg.primary"
				letterSpacing="xs"
				fontWeight="medium"
				fontSize={{ base: "24", md: "30" }}
			>
				{children}
			</Text>
			<DocsLayoutAiButtons />
		</Stack>
	);
}
