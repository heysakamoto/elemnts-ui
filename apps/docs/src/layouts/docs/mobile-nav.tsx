import { Dialog, Portal, Surface } from "@moto-ui/react";

import { InDialogContextProvider, useDocsLayoutContext } from "./client";
import { DocsLayoutSidebar } from "./sidebar";

export function DocsLayoutMobileNav() {
	const { open, setOpen } = useDocsLayoutContext();

	return (
		<InDialogContextProvider value={true}>
			<Dialog
				modal
				size="cover"
				open={open}
				onOpenChange={(details) => setOpen(details.open)}
			>
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
