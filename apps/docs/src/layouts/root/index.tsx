import { Box } from "@elemnts-ui/react";
import type { PropsWithChildren } from "react";

import { RootLayoutFooter } from "./footer";
import { RootLayoutHeader } from "./header";
import { RootLayoutPage } from "./page";

function RootLayoutRoot(props: PropsWithChildren) {
	const { children } = props;

	return <Box colorPalette="neutral">{children}</Box>;
}

export const RootLayout = Object.assign(RootLayoutRoot, {
	Root: RootLayoutRoot,
	Page: RootLayoutPage,
	Footer: RootLayoutFooter,
	Header: RootLayoutHeader,
});
