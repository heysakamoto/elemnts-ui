import {
  Alert,
  Button,
  Collapsible,
  Icon,
  Show,
  Stack,
  Surface,
} from "@moto-ui/react";
import { useQuery } from "@tanstack/react-query";
import { lazy, Suspense, useMemo, useState } from "react";

import { CopyButton } from "./copy-button";
import { getExample } from "@/utils/examples";
import { DynamicCode } from "../base/dynamic-code";

type ExampleProps = {
  name: string;
  hideCode?: boolean;
  description?: string;
};
export function Example(props: ExampleProps) {
  const { name } = props;
  const example = useMemo(() => getExample(name), [name]);
  const [open, setOpen] = useState(false);
  const { data: code } = useQuery({
    queryKey: ["example", name],
    queryFn: () => {
      if (!example.source) return null;
      const source = example.source;
      return source();
    },
  });

  const component = useMemo(() => {
    if (!example.component) return null;
    return lazy(example.component);
  }, [example.component]);

  return (
    <Surface my="40" delta={1} rounded="16" shadowLevel={0}>
      <Surface.Content p="24" minH="20rem" align="center" justify="center">
        <Show when={component}>
          {(Component) => (
            <Suspense fallback={null}>
              <Component />
            </Suspense>
          )}
        </Show>
        <Show when={!component}>
          <Alert py="8" px="12" w="fit" delta={0} status="warning">
            <Alert.Indicator>
              <Icon icon="tabler:alert-triangle" width={16} height={16} />
            </Alert.Indicator>
            <Alert.Content>
              <Alert.Title fontSize="14" color="colorPalette.primary">
                Component not found.
              </Alert.Title>
            </Alert.Content>
          </Alert>
        </Show>
      </Surface.Content>
      <Surface.Footer position="relative">
        <Collapsible
          open={open}
          rounded="0"
          scrollbar="hidden"
          collapsedHeight="96px"
          onOpenChange={(e) => setOpen(e.open)}
        >
          <Surface
            p="2"
            gap="2"
            delta={1}
            zIndex="1"
            left="50%"
            bottom="12"
            rounded="16"
            align="center"
            direction="row"
            position="absolute"
            transform="translateX(-50%)"
          >
            <Collapsible.Trigger unstyled asChild>
              <Button size="xs" fontSize="13" variant="secondary">
                {open ? "Hide" : "Expand"} code
              </Button>
            </Collapsible.Trigger>
            <CopyButton size="xs" position="static" value={code ?? ""} />
          </Surface>
          <Collapsible.Content
            px="12"
            rounded="20"
            _open={{ animation: "none" }}
            _closed={{ animation: "none" }}
          >
            <Stack
              py="12"
              maxH="16rem"
              scrollbar="hidden"
              direction="column"
              position="relative"
              overflow={open ? "auto" : "hidden"}
            >
              <DynamicCode code={code ?? ""} lang="tsx" />
            </Stack>
          </Collapsible.Content>
        </Collapsible>
      </Surface.Footer>
    </Surface>
  );
}
