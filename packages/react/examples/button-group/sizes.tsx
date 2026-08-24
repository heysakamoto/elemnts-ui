import { ButtonGroup, Container, For, Stack } from "@moto-ui/react";

const sizes = ["sm", "md", "lg"] as const;

export default function Sizes() {
  return (
    <Container>
      <Stack direction="column" gap="8" align="center">
        <For each={sizes}>
          {(size) => (
            <ButtonGroup attached key={size} size={size}>
              <ButtonGroup.Item roundedStart="16">
                Good
                <ButtonGroup.Separator />
              </ButtonGroup.Item>
              <ButtonGroup.Item roundedEnd="16">Poor</ButtonGroup.Item>
            </ButtonGroup>
          )}
        </For>
      </Stack>
    </Container>
  );
}
