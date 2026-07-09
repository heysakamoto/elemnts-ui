import { Dialog, Portal, Surface } from "@moto-ui/react";

import { InDialogContextProvider } from "./client";
import { DocsLayoutSidebar } from "./sidebar";

type DocsLayoutMobileNavProps = {
	children?: React.ReactNode;
};

export function DocsLayoutMobileNav(props: DocsLayoutMobileNavProps) {
	const { children } = props;

	return (
		<InDialogContextProvider value={true}>
			<Dialog
				modal
				size="cover"
			>
				<Dialog.Trigger asChild>{children}</Dialog.Trigger>
				<Portal>
					<Dialog.Backdrop />
					<Dialog.Positioner p="8">
						<Dialog.Content asChild>
							<Surface
								delta={1}
								rounded="24"
								colorPalette="neutral"
							>
								<Surface.Content overflow="auto">
									<DocsLayoutSidebar />
								</Surface.Content>
							</Surface>
						</Dialog.Content>
					</Dialog.Positioner>
				</Portal>
			</Dialog>
		</InDialogContextProvider>
	);
}
