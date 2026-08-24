import { Button, For, Icon, Show, Sidebar, Status } from "@moto-ui/react";
import { Link } from "@tanstack/react-router";
import type { Folder, Item, Node } from "fumadocs-core/page-tree";
import { createContext, use, useEffect, useMemo, useState } from "react";

import { useDocsLayoutContext, useInDialogContext } from "./client";
import { css } from "@/styled-system/css";
import { useLocation } from "@tanstack/react-router";
import { isNodeActive } from "@/utils/page-tree";

export function DocsLayoutPageTree() {
  const { pageTree } = useDocsLayoutContext();

  return (
    <Sidebar.Nav
      py="8"
      px="12"
      flexGrow="1"
      overflow="scroll"
      scrollbar="hidden"
    >
      <Sidebar.List>
        <For each={pageTree.children}>
          {(node, idx) => (
            <NodeRenderer node={node} key={node.$id ?? String(idx)} />
          )}
        </For>
      </Sidebar.List>
    </Sidebar.Nav>
  );
}

type NodeRendererProps = {
  node: Node;
};

function NodeRenderer({ node }: NodeRendererProps) {
  switch (node.type) {
    case "separator":
      return <PageTreeSeparator separator={node as Node} />;
    case "page":
      return <PageTreeItem item={node as Item} />;
    case "folder":
      return <PageTreeFolder folder={node as Folder} />;
    default:
      return null;
  }
}

type PageTreeSeparatorProps = {
  separator: Node;
};

function PageTreeSeparator({ separator }: PageTreeSeparatorProps) {
  return (
    <Sidebar.Item
      mb="2"
      px="10"
      mt="24"
      fontSize="14"
      fontWeight="500"
      letterSpacing="sm"
      color="fg.primary"
      display="inline-block"
      textTransform="capitalize"
      css={{ _first: { mt: 0 } }}
    >
      {separator.name}
    </Sidebar.Item>
  );
}

type PageTreeItemProps = {
  item: Item;
};

function PageTreeItem({ item }: PageTreeItemProps) {
  const inDialog = useInDialogContext();
  const { setOpen } = useDocsLayoutContext();
  const collapsible = useCollapsibleContext();

  const handleClick = () => {
    if (inDialog) {
      setOpen(false);
    }
  };

  return (
    <Sidebar.Item onClick={handleClick}>
      <Button
        asChild
        size="sm"
        fullWidth
        variant="ghost"
        className={itemStyles}
        pl={collapsible ? 24 : undefined}
        data-in-collapsible={collapsible ? "true" : "false"}
      >
        <Link to={item.url} preload="intent" activeOptions={{ exact: true }}>
          {item.name}
          <Show when={(item as any).status === "new"}>
            <Status size="sm" colorPalette="accent">
              <Status.Indicator ml="8" />
            </Status>
          </Show>
          <Show when={(item as any).status === "updated"}>
            <Status size="sm" colorPalette="warning">
              <Status.Indicator ml="8" />
            </Status>
          </Show>
        </Link>
      </Button>
    </Sidebar.Item>
  );
}

type PageTreeFolderProps = {
  folder: Folder;
};

function PageTreeFolder({ folder }: PageTreeFolderProps) {
  const pathname = useLocation({ select: (l) => l.pathname });
  const isActive = useMemo(() => {
    return isNodeActive(folder, pathname);
  }, [folder, pathname]);

  const [open, setOpen] = useState(folder.defaultOpen);

  function toggle() {
    setOpen(!open);
  }

  useEffect(() => {
    if (isActive) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [isActive]);

  return (
    <>
      <Show when={folder.collapsible}>
        <CollapsibleContext.Provider value={true}>
          <Sidebar.Item>
            <Button
              size="sm"
              fullWidth
              variant="ghost"
              aria-expanded={open}
              className={itemStyles}
              onClick={() => toggle()}
            >
              {folder.name}
              <Icon width={16} height={16} icon="tabler:chevron-down" />
            </Button>
          </Sidebar.Item>
          <Show when={open}>
            <For each={folder.children}>
              {(child) => <NodeRenderer node={child} key={child.$id} />}
            </For>
          </Show>
        </CollapsibleContext.Provider>
      </Show>
      <Show when={!folder.collapsible}>
        <For each={folder.children}>
          {(child) => <NodeRenderer node={child} key={child.$id} />}
        </For>
      </Show>
    </>
  );
}

const CollapsibleContext = createContext(false);
const useCollapsibleContext = () => use(CollapsibleContext);

const itemStyles = css({
  fontSize: "14",
  overflow: "clip",
  textAlign: "left",
  position: "relative",
  color: "fg.secondary",
  display: "inline-flex",
  justifyContent: "space-between",

  "& svg": {
    color: "icon.secondary",
  },

  "&:is([data-status=active], :hover)": {
    color: "fg.primary",
    bgColor: "neutral.secondary",

    "& svg": {
      color: "currentColor",
    },
    _before: {
      bgColor: "fg.primary",
    },
  },

  "&[data-in-collapsible=true]": {
    _before: {
      content: "''",
      top: "0",
      left: "12px",
      width: "1px",
      height: "full",
      position: "absolute",
      bgColor: "stroke.primary",
    },
  },
});
