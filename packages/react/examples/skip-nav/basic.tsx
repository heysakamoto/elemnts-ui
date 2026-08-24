import { Container, SkipNav, Surface, Text } from "@moto-ui/react";

export default function Basic() {
  return (
    <Container maxW="28rem">
      <SkipNav>
        <SkipNav.Link>Skip to main content</SkipNav.Link>
        <Text>Press Tab to reveal the skip navigation link.</Text>
        <SkipNav.Content mt="8" as="main">
          <Surface p="12">
            <Surface.Description fontSize="16">
              This is the main content area that receives focus when you
              activate the skip navigation link.
            </Surface.Description>
          </Surface>
        </SkipNav.Content>
      </SkipNav>
    </Container>
  );
}
