import { Alert, Container, Icon } from "@moto-ui/react";

export default function Description() {
  return (
    <Container maxW="24rem">
      <Alert>
        <Alert.Indicator>
          <Icon icon="tabler:message-dots" width={20} height={20} />
        </Alert.Indicator>
        <Alert.Content>
          <Alert.Title>Emma is typing...</Alert.Title>
          <Alert.Description>
            Resume your conversation with Emma or view the message anonymously.
          </Alert.Description>
        </Alert.Content>
      </Alert>
    </Container>
  );
}
