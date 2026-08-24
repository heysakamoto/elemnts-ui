import { Alert, Button, Container, Icon } from "@moto-ui/react";

export default function Control() {
  return (
    <Container maxW="24rem">
      <Alert.Root status="destructive">
        <Alert.Indicator>
          <Icon icon="tabler:world-x" width={20} height={20} />
        </Alert.Indicator>
        <Alert.Content>
          <Alert.Title>Build failed</Alert.Title>
          <Alert.Description>
            Something went wrong while building your project. Try again later.
          </Alert.Description>
        </Alert.Content>
        <Alert.Control mr="-6" mt="-2">
          <Button iconOnly variant="ghost" boxSize="24">
            <Icon icon="tabler:x" width={16} height={16} />
          </Button>
        </Alert.Control>
      </Alert.Root>
    </Container>
  );
}
