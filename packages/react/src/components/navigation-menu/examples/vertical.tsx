import {
  Button,
  For,
  Grid,
  Icon,
  NavigationMenu,
  Show,
  Surface,
  Tile,
} from "@elemnts-ui/react";

const sections = [
  {
    id: "overview",
    label: "Overview",
    children: [
      {
        id: "quick-start",
        label: "Quick Start",
        href: "#quick-start",
        icon: "tabler:circle-asterisk",
        description: "Install and assemble",
      },
      {
        id: "styling",
        label: "Styling",
        href: "#styling",
        icon: "tabler:signature",
        description: "CSS, CSS-in-JS, or utilities",
      },
      {
        id: "accessibility",
        label: "Accessibility",
        icon: "tabler:accessible",
        href: "#accessibility",
        description: "Keyboard and ARIA support",
      },
      {
        id: "releases",
        label: "Releases",
        href: "#releases",
        icon: "tabler:sparkles-2",
        description: "What's new in Elemnts UI",
      },
    ],
  },
  {
    id: "guides",
    label: "Guides",
    children: [
      {
        id: "animations",
        label: "Animations",
        icon: "tabler:transform",
        href: "#animations",
        description: "CSS or JavaScript",
      },
      {
        id: "composition",
        label: "Composition",
        icon: "tabler:blocks",
        href: "#composition",
        description: "Replace and compose parts",
      },
      {
        id: "forms",
        label: "Forms",
        icon: "tabler:forms",
        href: "#forms",
        description: "Native and library forms",
      },
      {
        id: "refs",
        label: "Refs",
        icon: "tabler:category-2",
        href: "#refs",
        description: "How to use refs",
      },
    ],
  },
  {
    id: "documentation",
    label: "Documentation",
    href: "https://moto-ui.app",
  },
];

export default function Vertical() {
  return (
    <NavigationMenu orientation="vertical">
      <NavigationMenu.List mx="auto">
        <For each={sections}>
          {(section) => (
            <NavigationMenu.Item value={section.id} key={section.id}>
              <Show
                when={section.children}
                fallback={
                  <NavigationMenu.Link asChild href={section.href}>
                    <Button size="sm" variant="ghost">
                      {section.label}
                    </Button>
                  </NavigationMenu.Link>
                }
              >
                <NavigationMenu.Trigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    css={{
                      "&:not(:hover) > svg": {
                        color: "icon.secondary",
                      },
                    }}
                  >
                    {section.label}
                    <Icon width={16} height={16} icon="tabler:chevron-right" />
                  </Button>
                </NavigationMenu.Trigger>
              </Show>
              <Show when={section.children}>
                <NavigationMenu.Content asChild>
                  <Surface rounded="12" ml="8">
                    <Surface.Content direction={["row"]} p="4">
                      <Grid gap="2" gridTemplateColumns="1fr">
                        <For each={section.children}>
                          {(item) => (
                            <NavigationMenu.Link
                              asChild
                              key={item.id}
                              href={item.href}
                            >
                              <Tile as="a" size="sm" variant="secondary">
                                <Tile.Indicator ml="-6" asChild>
                                  <Icon
                                    width={20}
                                    height={20}
                                    icon={item.icon}
                                  />
                                </Tile.Indicator>
                                <Tile.Content gap="4">
                                  <Tile.Title>{item.label}</Tile.Title>
                                  <Tile.Description>
                                    {item.description}
                                  </Tile.Description>
                                </Tile.Content>
                              </Tile>
                            </NavigationMenu.Link>
                          )}
                        </For>
                      </Grid>
                    </Surface.Content>
                  </Surface>
                </NavigationMenu.Content>
              </Show>
            </NavigationMenu.Item>
          )}
        </For>
      </NavigationMenu.List>
    </NavigationMenu>
  );
}
