import {
  Button,
  ButtonGroup,
  Container,
  Dialog,
  For,
  Portal,
  Surface,
} from "@moto-ui/react";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

export default function Sizes() {
  return (
    <Container maxW="24rem">
      <ButtonGroup justify="center">
        <For each={sizes}>
          {(size) => (
            <Dialog size={size}>
              <Dialog.Trigger asChild>
                <Button variant="surface">{size}</Button>
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
                      <Surface.Footer mt="16" direction="row" gap="8">
                        <Dialog.CloseTrigger asChild>
                          <Button variant="tertiary" colorPalette="neutral">
                            Deny
                          </Button>
                        </Dialog.CloseTrigger>
                        <Dialog.CloseTrigger asChild>
                          <Button variant="primary">Allow</Button>
                        </Dialog.CloseTrigger>
                      </Surface.Footer>
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
