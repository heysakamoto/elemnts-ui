import {
  Button,
  ButtonGroup,
  Container,
  Dialog,
  For,
  Portal,
  Surface,
} from "@moto-ui/react";

const placements = ["top", "center", "bottom"] as const;

export default function Placements() {
  return (
    <Container>
      <ButtonGroup justify="center">
        <For each={placements}>
          {(placement) => (
            <Dialog placement={placement}>
              <Dialog.Trigger asChild>
                <Button size="sm" variant="surface" textTransform="capitalize">
                  {placement}
                </Button>
              </Dialog.Trigger>
              <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                  <Dialog.Content asChild>
                    <Surface
                      p="16"
                      delta={1}
                      rounded="24"
                      colorPalette="neutral"
                    >
                      <Surface.Content>
                        <Dialog.Title>Approve</Dialog.Title>
                        <Dialog.Description>
                          Authorize a third-party service to access all media
                          files in your account—such as photos, videos, and
                          other stored items.
                        </Dialog.Description>
                      </Surface.Content>
                      <Surface.Addon mt="16" direction="row" gap="8">
                        <Dialog.CloseTrigger asChild>
                          <Button variant="tertiary">Deny</Button>
                        </Dialog.CloseTrigger>
                        <Dialog.CloseTrigger asChild>
                          <Button variant="primary">Allow</Button>
                        </Dialog.CloseTrigger>
                      </Surface.Addon>
                    </Surface>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Portal>
            </Dialog>
          )}
        </For>
      </ButtonGroup>
    </Container>
  );
}
