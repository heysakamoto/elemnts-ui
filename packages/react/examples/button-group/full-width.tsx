import { ButtonGroup, Container, Stack } from "@moto-ui/react";

export default function FullWidth() {
  return (
    <Container maxW="16rem">
      <Stack direction="column" gap="16" align="center">
        <ButtonGroup fullWidth attached variant="surface">
          <ButtonGroup.Item roundedStart="16">
            Fix error
            <ButtonGroup.Separator />
          </ButtonGroup.Item>
          <ButtonGroup.Item roundedEnd="16">Ignore</ButtonGroup.Item>
        </ButtonGroup>
      </Stack>
    </Container>
  );
}
