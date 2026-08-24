import { Button, Container, For, Stack } from "@moto-ui/react";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

export default function Sizes() {
  return (
    <Container>
      <Stack gap="8" align="center" justify="center" wrap="wrap">
        <For each={sizes}>
          {(size) => (
            <Button key={size} size={size}>
              Roadmap
            </Button>
          )}
        </For>
      </Stack>
    </Container>
  );
}
