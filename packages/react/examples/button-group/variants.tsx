import { ButtonGroup, Container, For, Stack } from "@moto-ui/react";

const variants = ["secondary", "tertiary"] as const;

export default function Variants() {
  return (
    <Container>
      <Stack direction="column" gap="8" align="center">
        <For each={variants}>
          {(variant) => (
            <ButtonGroup attached size="sm" key={variant} variant={variant}>
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
