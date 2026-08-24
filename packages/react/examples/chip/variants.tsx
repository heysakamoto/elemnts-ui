import { Chip, Container, For, Stack } from "@moto-ui/react";

const variants = [
  "primary",
  "secondary",
  "tertiary",
  "surface",
  "ghost",
] as const;

export default function Variants() {
  return (
    <Container>
      <Stack wrap="wrap" gap="8" align="center" justify="center">
        <For each={variants}>
          {(variant) => (
            <Chip size="sm" variant={variant} key={variant}>
              Chip
            </Chip>
          )}
        </For>
      </Stack>
    </Container>
  );
}
