import { Anchor, Container, For } from "@moto-ui/react";

const variants = ["primary", "secondary", "tertiary"] as const;

export default function Variants() {
  return (
    <Container>
      <For each={variants}>
        {(variant) => (
          <Anchor fontSize="14" variant={variant}>
            {variant}
          </Anchor>
        )}
      </For>
    </Container>
  );
}
