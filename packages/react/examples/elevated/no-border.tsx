import { Container, Elevated, Text } from "@moto-ui/react";

export default function NoBorder() {
  return (
    <Container maxW="24rem">
      <Elevated py="12" px="16" delta={2} rounded="16" withBorder={false}>
        <Text fontSize="14">Elevation Level 3 (Without Border)</Text>
      </Elevated>
    </Container>
  );
}
