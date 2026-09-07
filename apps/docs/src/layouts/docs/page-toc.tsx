import { Icon, Toc } from "@elemnts-ui/react";
import { useDocsLayoutPageContext } from "./client";

export function DocsLayoutPageToc() {
  const { items } = useDocsLayoutPageContext();

  return (
    <Toc.Nav
      hideBelow="lg"
      w="var(--toc-width)"
      h="var(--toc-height)"
      top="var(--navbar-height)"
      pt="var(--page-offset-top)"
    >
      <Toc.Title>
        <Icon width={14} height={14} icon="lucide:list-sort-descending" />
        On this page
      </Toc.Title>
      <Toc.List borderLeft="1px solid {colors.stroke.primary}" pl="12">
        <Toc.Indicator ml="-1px" />
        {items.map((item) => (
          <Toc.Item key={item.value} item={item}>
            <Toc.Link
              href={`#${item.value}`}
              css={{
                pl: "calc((var(--depth) - 2) * 12px)",
              }}
            >
              {item.title}
            </Toc.Link>
          </Toc.Item>
        ))}
      </Toc.List>
    </Toc.Nav>
  );
}
