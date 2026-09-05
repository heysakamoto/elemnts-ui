import { Drawer, Sidebar, Surface } from "@elemnts-ui/react";
import type { PropsWithChildren } from "react";

import {
	DocsLayoutMobileMenuContext,
	type UseDocsLayoutMobileMenuProps,
	useDocsLayoutMobileMenu,
} from "./client";
import { DocsLayoutPageTree } from "./page-tree";

type DocsLayoutMobileMenuProps =
	PropsWithChildren<UseDocsLayoutMobileMenuProps>;

export function DocsLayoutMobileMenu(props: DocsLayoutMobileMenuProps) {
	const { children, defaultOpen } = props;
	const value = useDocsLayoutMobileMenu({ defaultOpen });

	return (
		<DocsLayoutMobileMenuContext.Provider value={value}>
			<Drawer
				modal
				open={value.open}
				onOpenChange={(details) => value.setOpen(details.open)}
			>
				{children}
				<Drawer.Backdrop />
				<Drawer.Positioner>
					<Drawer.Content asChild>
						<Surface delta={1} roundedTop="16" colorPalette="neutral">
							<Drawer.Grabber>
								<Drawer.GrabberIndicator />
							</Drawer.Grabber>
							<Surface.Content
								flexGrow={1}
								overflow="scroll"
								scrollbar="hidden"
							>
								<Sidebar>
									<DocsLayoutPageTree />
								</Sidebar>
							</Surface.Content>
						</Surface>
					</Drawer.Content>
				</Drawer.Positioner>
			</Drawer>
		</DocsLayoutMobileMenuContext.Provider>
	);
}
