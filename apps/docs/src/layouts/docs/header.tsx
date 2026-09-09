import {
  Button,
  Container,
  Group,
  Icon,
  Kbd,
  Section,
  Stack,
  useFormatHotkey,
  VisuallyHidden,
} from "@elemnts-ui/react";
import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/base/logo";
import {
  useDocsLayoutCommandMenuContext,
  useDocsLayoutMobileMenuContext,
} from "./client";

export function DocsLayoutHeader() {
  const formatHotkey = useFormatHotkey();
  const commandMenu = useDocsLayoutCommandMenuContext();
  const mobileMenu = useDocsLayoutMobileMenuContext();

  return (
    <Section
      top="0"
      zIndex="2"
      as="header"
      position="sticky"
      backdropFilter="blur(16px)"
      borderBottom="1px solid {colors.stroke.primary}"
    >
      <Container px="16" fluid>
        <Stack
          align="center"
          justify="space-between"
          h="var(--navbar-height)"
          gap={{ base: "12", md: "20", lg: "48" }}
        >
          <Logo />

          <Group>
            <Button
              w="18rem"
              size="sm"
              hideBelow="sm"
              variant="surface"
              color="fg.tertiary"
              onClick={() => commandMenu.setOpen(true)}
            >
              <Icon ml="-2" icon="tabler:search" width="14" height="14" />
              Search
              <Kbd size="2xs" variant="surface" color="inherit">
                {formatHotkey("mod+K")}
              </Kbd>
            </Button>
          </Group>

          <Group justify="end">
            <Button
              iconOnly
              hideFrom="md"
              variant="surface"
              onClick={() => mobileMenu.setOpen(true)}
            >
              <VisuallyHidden>Menu</VisuallyHidden>
              <Icon icon="tabler:menu" width="16" height="16" />
            </Button>
            <Button
              iconOnly
              hideFrom="sm"
              variant="surface"
              onClick={() => commandMenu.setOpen(true)}
            >
              <VisuallyHidden>Search</VisuallyHidden>
              <Icon icon="tabler:search" width="16" height="16" />
            </Button>
            <Button asChild fontWeight="medium">
              <Link to="/sponsor">Sponsor</Link>
            </Button>
          </Group>
        </Stack>
      </Container>
    </Section>
  );
}
