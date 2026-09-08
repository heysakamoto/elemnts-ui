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
        icon: "tabler:code",
        description: "Set up environment",
      },
      {
        id: "theming",
        label: "Theming",
        href: "#theming",
        icon: "tabler:palette",
        description: "Customize theme globally.",
      },
      {
        id: "accessibility",
        label: "Accessibility",
        href: "#accessibility",
        icon: "tabler:accessible",
        description: "Accessible ARIA components",
      },
      {
        id: "best-practices",
        label: "Best Practices",
        href: "#best-practices",
        icon: "tabler:meteor",
        description: "Best practices and guidelines",
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
        href: "#animations",
        icon: "tabler:app-window-bottom-left",
        description: "Smooth animations",
      },
      {
        id: "composition",
        label: "Composition",
        href: "#composition",
        icon: "tabler:manual-gearbox",
        description: "Compose for complex UIs.",
      },
      {
        id: "forms",
        label: "Forms",
        href: "#forms",
        icon: "tabler:input-spark",
        description: "Build interactive forms",
      },
      {
        id: "refs",
        label: "Refs",
        href: "#refs",
        icon: "tabler:atom",
        description: "Manage DOM elements.",
      },
    ],
  },
  {
    id: "documentation",
    label: "Documentation",
    href: "https://moto-ui.app",
  },
];

export default function Basic() {
  return (
    <NavigationMenu>
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
                    <Icon width={16} height={16} icon="tabler:chevron-down" />
                  </Button>
                </NavigationMenu.Trigger>
              </Show>
              <Show when={section.children}>
                <NavigationMenu.Content asChild>
                  <Surface rounded="12" mt="8">
                    <Surface.Content direction={["row"]} p="4">
                      <Grid
                        gap="10"
                        gridTemplateColumns={{
                          base: "1fr",
                          lg: "repeat(2, minmax(200px, 1fr))",
                        }}
                      >
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
