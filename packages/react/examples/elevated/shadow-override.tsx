import { Container, Elevated, Text } from "@moto-ui/react";

export default function ShadowOverride() {
  return (
    <Container maxW="24rem">
      <Elevated py="12" px="16" delta={1} rounded="16" shadowLevel={4}>
        <Text fontSize="14">Elevated component with Shadow Level 4</Text>
      </Elevated>
    </Container>
  );
}
