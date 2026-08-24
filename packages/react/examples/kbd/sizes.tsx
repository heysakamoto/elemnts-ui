import { Container, For, Kbd, KbdGroup } from "@moto-ui/react";

const sizes = ["xl", "lg", "md", "sm", "xs", "2xs"] as const;

export default function Sizes() {
  return (
    <Container>
      <KbdGroup justify="center" wrap="wrap">
        <For each={sizes}>
          {(size) => (
            <Kbd key={size} size={size}>
              ⌘ K
            </Kbd>
          )}
        </For>
      </KbdGroup>
    </Container>
  );
}
