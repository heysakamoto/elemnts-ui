import { Button, Drawer, Portal, Surface } from "@moto-ui/react";
import { Fragment, useState } from "react";

export function Controlled() {
	const [open, setOpen] = useState(false);

	return (
		<Fragment>
			<Button
				rounded="24"
				variant="surface"
				colorPalette="neutral"
				size="sm"
				onClick={() => setOpen(true)}
			>
				Open
			</Button>
			<Drawer
				open={open}
				onOpenChange={(details) => setOpen(details.open)}
			>
				<Portal>
					<Drawer.Backdrop />
					<Drawer.Positioner>
						<Drawer.Content asChild>
							<Surface
								delta={1}
								roundedTop="24"
							>
								<Drawer.Grabber>
									<Drawer.GrabberIndicator />
								</Drawer.Grabber>
								<Surface.Content
									p="16"
									flexGrow="1"
									align="center"
									justify="center"
								>
									<Drawer.Title>Controlled Drawer</Drawer.Title>
									<Drawer.Description
										mx="auto"
										maxW="24rem"
										textAlign="center"
									>
										The open/closed state is managed by the parent via the
										onOpenChange prop, rather than by the Drawer itself.
									</Drawer.Description>
								</Surface.Content>
							</Surface>
						</Drawer.Content>
					</Drawer.Positioner>
				</Portal>
			</Drawer>
		</Fragment>
	);
}
