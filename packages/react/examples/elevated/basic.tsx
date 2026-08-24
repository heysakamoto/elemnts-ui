import { Container, Elevated, For, Text } from "@moto-ui/react";

export default function Basic() {
  return (
    <Container spaceY="10" maxW="24rem">
      <For each={[1, 2, 3]}>
        {(delta) => (
          <Elevated
            py="12"
            px="16"
            rounded="16"
            delta={delta}
            key={String(delta)}
          >
            <Text>Elevation Level {delta} (Delta +1)</Text>
          </Elevated>
        )}
      </For>
    </Container>
  );
}
