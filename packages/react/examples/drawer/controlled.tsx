import { Button, Drawer, Portal, Surface } from "@moto-ui/react";
import { Fragment, useState } from "react";

export default function Controlled() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Button size="sm" variant="surface" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer open={open} onOpenChange={(details) => setOpen(details.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content asChild>
              <Surface delta={1} roundedTop="24">
                <Drawer.Grabber>
                  <Drawer.GrabberIndicator />
                </Drawer.Grabber>
                <Surface.Content
                  p="16"
                  mx="auto"
                  maxW="24rem"
                  flexGrow="1"
                  justify="center"
                >
                  <Drawer.Title>Drawer</Drawer.Title>
                  <Drawer.Description>
                    A UI panel that slides in from the edge of the screen
                    (usually the bottom on mobile, or left/right on desktop) and
                    overlays the existing content, rather than navigating to a
                    new page.
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
