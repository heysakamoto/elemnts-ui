import { Button, ButtonGroup, Icon, List, Show } from "@elemnts-ui/react";

type DocsPageLinksProps = {
  links?: {
    ark?: string;
    recipe?: string;
    source?: string;
  };
};

export function DocsLayoutPageLinks(props: DocsPageLinksProps) {
  const { links } = props;

  return (
    <Show when={links}>
      {(links) => (
        <ButtonGroup asChild mt="20" variant="secondary" size="xs">
          <List>
            {Object.entries(links).map(([key, href]) => (
              <List.Item key={key}>
                <Button asChild textTransform="capitalize" fontSize="14">
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon icon="tabler:link" />
                    {key}
                  </a>
                </Button>
              </List.Item>
            ))}
          </List>
        </ButtonGroup>
      )}
    </Show>
  );
}
