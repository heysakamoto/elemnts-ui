import { Container, Field, Fieldset, Input, Stack } from "@moto-ui/react";

export default function Invalid() {
  return (
    <Container maxW="24rem">
      <Fieldset invalid>
        <Fieldset.Legend>Contact Details</Fieldset.Legend>
        <Fieldset.HelperText>Please fix the errors below.</Fieldset.HelperText>
        <Stack mt="12" gap="12" direction="column">
          <Field invalid>
            <Field.Label>Name</Field.Label>
            <Input placeholder="John Doe" />
            <Field.ErrorText>Enter a valid name</Field.ErrorText>
          </Field>
          <Field invalid>
            <Field.Label>Email</Field.Label>
            <Input type="email" placeholder="john@example.com" />
            <Field.ErrorText>Enter a valid email</Field.ErrorText>
          </Field>
        </Stack>
      </Fieldset>
    </Container>
  );
}
