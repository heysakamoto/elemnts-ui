import { Text } from "@moto-ui/react";
import type { PropsWithChildren } from "react";

export function DocsLayoutPageDescription(props: PropsWithChildren) {
	const { children } = props;

	return (
    <Text mt="20" mb="32" fontSize="18" lineHeight="md" color="fg.primary">
      {children}
    </Text>
  );
}
