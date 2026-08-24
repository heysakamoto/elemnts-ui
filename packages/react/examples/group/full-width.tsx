import { Button, Container, Group } from "@moto-ui/react";

export default function FullWidth() {
  return (
    <Container maxW="28rem">
      <Group fullWidth>
        <Button rounded="calc(24px - 8px)" variant="tertiary">
          Professional
        </Button>
        <Button rounded="calc(24px - 8px)" variant="tertiary">
          Premium
        </Button>
        <Button rounded="calc(24px - 8px)" variant="tertiary">
          Freemium
        </Button>
      </Group>
    </Container>
  );
}
