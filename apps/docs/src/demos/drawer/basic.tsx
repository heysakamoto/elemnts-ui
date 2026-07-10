import { Button, Drawer, Surface } from "@moto-ui/react";

export function Basic() {
	return (
		<Drawer>
			<Drawer.Trigger asChild>
				<Button
					size="sm"
					rounded="24"
					variant="surface"
					colorPalette="neutral"
				>
					Open
				</Button>
			</Drawer.Trigger>
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
							<Drawer.Title>Drawer</Drawer.Title>
							<Drawer.Description
								mx="auto"
								maxW="24rem"
								textAlign="center"
							>
								A UI panel that slides in from the edge of the screen (usually
								the bottom on mobile, or left/right on desktop) and overlays the
								existing content, rather than navigating to a new page.
							</Drawer.Description>
						</Surface.Content>
					</Surface>
				</Drawer.Content>
			</Drawer.Positioner>
		</Drawer>
	);
}
