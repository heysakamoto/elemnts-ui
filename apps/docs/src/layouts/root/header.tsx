import {
  ButtonGroup,
  Container,
  Icon,
  Section,
  Stack,
} from "@elemnts-ui/react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/base/logo";

export function RootLayoutHeader() {
	return (
    <Section
      top="0"
      zIndex="2"
      as="header"
      position="sticky"
      colorPalette="neutral"
      backdropFilter="blur(20px)"
      borderBottom="1px solid {colors.stroke.primary}"
      bgColor="color-mix(in oklab, {colors.surface-1}, 90% {colors.transparent})"
    >
      <Container fluid px="16">
        <Stack h="var(--navbar-height)" align="center" justify="space-between">
          <Logo />

          <ButtonGroup size="xs" variant="secondary">
            <ButtonGroup.Item asChild fontSize="14">
              <Link to="/docs/$" params={{ _splat: "/" }}>
                <Icon icon="lucide:library" />
                Docs
              </Link>
            </ButtonGroup.Item>
            <ButtonGroup.Item asChild fontSize="14">
              <Link to="/sponsor">
                <Icon icon="lucide:heart" />
                Sponsor
              </Link>
            </ButtonGroup.Item>
          </ButtonGroup>
        </Stack>
      </Container>
    </Section>
  );
}
