import { Container, Field, Input } from "@moto-ui/react";

export default function Basic() {
  return (
    <Container maxW="20rem">
      <Field>
        <Field.Label>Username</Field.Label>
        <Field.Input asChild>
          <Input placeholder="Enter your username" />
        </Field.Input>
      </Field>
    </Container>
  );
}
