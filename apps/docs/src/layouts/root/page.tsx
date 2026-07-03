import { Section } from "@moto-ui/react";
import type { PropsWithChildren } from "react";

type RootLayoutPageProps = PropsWithChildren;

export function RootLayoutPage(props: RootLayoutPageProps) {
	const { children } = props;

	return <Section as="main">{children}</Section>;
}
