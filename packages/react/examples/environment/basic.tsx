import { Container, Environment, Text } from "@moto-ui/react";

export default function Basic() {
  return (
    <Container maxW="24rem">
      <Environment>
        <Text>
          The components inside this provider will use the environment (window,
          document) provided by the Environment component.
        </Text>
      </Environment>
    </Container>
  );
}
