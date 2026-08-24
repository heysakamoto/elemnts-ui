import {
  Button,
  ButtonGroup,
  ColorTheme,
  For,
  Icon,
  Menu,
  Separator,
  Sidebar,
  Stack,
  Surface,
  Text,
  Tile,
  VisuallyHidden,
} from "@moto-ui/react";
import { Link } from "@tanstack/react-router";

import { useDocsLayoutContext } from "./client";
import { socials, urls } from "./constant";
import { DocsLayoutPageTree } from "./page-tree";
import { Logo } from "@/components/base/logo";
import { useSearchContext } from "@/features/search";

export function DocsLayoutSidebar() {
  return (
    <Sidebar h="full" display="flex" direction="column">
      <SidebarHeader />
      <Separator orientation="horizontal" />
      <DocsLayoutPageTree />
      <Separator orientation="horizontal" />
      <SidebarFooter />
    </Sidebar>
  );
}

function SidebarHeader() {
  const search = useSearchContext();
  const layout = useDocsLayoutContext();

  return (
    <Sidebar.Addon direction="column" p="12" spaceY="12">
      <Stack align="center" justify="space-between">
        <Link to="/" preload="intent">
          <VisuallyHidden>Home</VisuallyHidden>
          <Logo width={32} height={32} style={{ marginLeft: 8 }} />
        </Link>
        <Button
          iconOnly
          hideFrom="sm"
          variant="surface"
          onClick={() => layout.setOpen(false)}
        >
          <VisuallyHidden>Close</VisuallyHidden>
          <Icon width={16} height={16} icon="tabler:x" />
        </Button>
        <Button
          iconOnly
          size="sm"
          hideBelow="md"
          variant="surface"
          onClick={() => search.setOpen(true)}
        >
          <VisuallyHidden>Search</VisuallyHidden>
          <Icon width={16} height={16} icon="tabler:search" />
        </Button>
      </Stack>
      <Menu positioning={{ sameWidth: true }}>
        <Menu.Trigger asChild>
          <Button gap="8" fullWidth variant="surface">
            <Icon ml="-1" width={18} height={18} icon={urls[0]?.icon ?? ""} />
            <Text as="span" flexGrow={1} textAlign="left">
              {urls[0]?.label}
            </Text>
            <Icon mr="-1" width={16} height={16} icon="tabler:chevron-down" />
          </Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content asChild>
            <Surface delta={1} rounded="24">
              <Surface.Content p="4">
                <For each={urls}>
                  {(url, idx) => (
                    <Menu.Item
                      asChild
                      key={url.id}
                      value={url.id}
                      disabled={url.disabled}
                    >
                      <Tile asChild size="xs" fontSize="13" variant="secondary">
                        <Link
                          to={idx === 0 ? "/docs" : url.url}
                          target={idx !== 0 ? "_blank" : undefined}
                        >
                          <Icon
                            mt="-1"
                            ml="-1"
                            width={18}
                            height={18}
                            icon={url.icon}
                          />
                          <Tile.Content gap="2">
                            <Tile.Title lineHeight="1">{url.label}</Tile.Title>
                            <Tile.Description>
                              {url.description}
                            </Tile.Description>
                          </Tile.Content>
                        </Link>
                      </Tile>
                    </Menu.Item>
                  )}
                </For>
              </Surface.Content>
            </Surface>
          </Menu.Content>
        </Menu.Positioner>
      </Menu>
    </Sidebar.Addon>
  );
}

function SidebarFooter() {
  return (
    <Sidebar.Addon p="12">
      <ButtonGroup size="sm" iconOnly variant="surface">
        <For each={socials}>
          {(social) => (
            <ButtonGroup.Item asChild key={social.id}>
              <Link target="_blank" to={social.url as any}>
                <VisuallyHidden>{social.label}</VisuallyHidden>
                <Icon width={16} height={16} icon={social.icon} />
              </Link>
            </ButtonGroup.Item>
          )}
        </For>
        <Separator flexGrow="1" variant="ghost" orientation="horizontal" />
        <ColorTheme.Trigger asChild>
          <ButtonGroup.Item>
            <VisuallyHidden>Toggle color scheme</VisuallyHidden>
            <ColorTheme.Indicator
              fallback={<Icon width={16} height={16} icon="tabler:sun" />}
            >
              <Icon width={16} height={16} icon="tabler:moon" />
            </ColorTheme.Indicator>
          </ButtonGroup.Item>
        </ColorTheme.Trigger>
      </ButtonGroup>
    </Sidebar.Addon>
  );
}
