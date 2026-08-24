import { Chip, Container, For, Stack } from "@moto-ui/react";

const sizes = ["xl", "lg", "md", "sm", "xs", "2xs"] as const;

export default function Sizes() {
  return (
    <Container>
      <Stack wrap="wrap" gap="8" justify="center" align="center">
        <For each={sizes}>
          {(size) => (
            <Chip key={size} size={size}>
              Chip
            </Chip>
          )}
        </For>
      </Stack>
    </Container>
  );
}
