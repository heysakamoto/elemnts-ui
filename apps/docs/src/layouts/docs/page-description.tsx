import { Text } from "@elemnts-ui/react";
import type { PropsWithChildren } from "react";

export function DocsLayoutPageDescription(props: PropsWithChildren) {
	const { children } = props;

	return (
		<Text mt="20" fontSize="18">
			{children}
		</Text>
	);
}
