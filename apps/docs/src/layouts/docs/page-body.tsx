import { Container, Group, Icon, Show, Tile } from "@moto-ui/react";
import { Link, useLocation } from "@tanstack/react-router";
import { findNeighbour } from "fumadocs-core/page-tree";
import type { PropsWithChildren } from "react";

import { useDocsLayoutContext } from "./client";

export function DocsLayoutPageBody(props: PropsWithChildren) {
	const { children } = props;

  return (
    <Container pt="44" px="16" maxW="40rem" pb={{ base: 96, md: 44 }}>
      {children}
      <Navigator />
    </Container>
  );
}

function Navigator() {
  const { pageTree } = useDocsLayoutContext();
  const pathname = useLocation({ select: (l) => l.pathname });
  const { next, previous } = findNeighbour(pageTree, pathname);

  return (
    <Group mt="56" gap="20" fullWidth hideBelow="md" justify="space-between">
      <Show when={previous}>
        {(previous) => (
          <Tile
            asChild
            align="start"
            direction="column"
            variant="secondary"
            orientation="vertical"
          >
            <Link preload="intent" to={previous.url}>
              <Icon ml="-2" width={18} height={18} icon="tabler:arrow-left" />
              <Tile.Content direction="column" align="start">
                <Tile.Description fontSize="13" color="fg.secondary">
                  Previous
                </Tile.Description>
                <Tile.Title>{previous.name}</Tile.Title>
              </Tile.Content>
            </Link>
          </Tile>
        )}
      </Show>
      <Show when={next}>
        {(next) => (
          <Tile
            asChild
            align="end"
            direction="column"
            variant="secondary"
            orientation="vertical"
          >
            <Link to={next.url} preload="intent">
              <Icon mr="-2" width={16} height={16} icon="tabler:arrow-right" />
              <Tile.Content direction="column" align="end">
                <Tile.Description color="fg.secondary">Next</Tile.Description>
                <Tile.Title>{next.name}</Tile.Title>
              </Tile.Content>
            </Link>
          </Tile>
        )}
      </Show>
    </Group>
  );
}
