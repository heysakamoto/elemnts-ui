import {
  Button,
  Collapsible,
  Item,
  Progress,
  Section,
  Surface,
  Text,
  Toc,
} from "@elemnts-ui/react";
import { useRef } from "react";

const items = [
  { value: "03-overview", depth: 2, label: "Overview", lines: 8 },
  { value: "03-prerequisites", depth: 2, label: "Prerequisites", lines: 5 },
  { value: "03-quick-start", depth: 2, label: "Quick Start", lines: 20 },
  { value: "03-commands", depth: 2, label: "Core Commands", lines: 15 },
  {
    value: "03-troubleshooting",
    depth: 2,
    label: "Troubleshooting",
    lines: 12,
  },
];

export default function WithCollapsible() {
  const contentRef = useRef<HTMLElement>(null);

  return (
    <Toc items={items} direction="column" scrollEl={() => contentRef.current}>
      <Collapsible unstyled w="full">
        <Toc.Context>
          {({ activeItems }) => {
            const idx = items.findIndex(
              (i) => i.value === activeItems[0]?.value,
            );
            const label = items[idx]?.label ?? "On this page";
            const progress = idx >= 0 ? ((idx + 1) / items.length) * 100 : 0;

            return (
              <Collapsible.Trigger unstyled asChild>
                <Button gap="10" fullWidth variant="surface">
                  <Progress size="xs" value={progress}>
                    <Progress.Circle>
                      <Progress.CircleTrack />
                      <Progress.CircleRange />
                    </Progress.Circle>
                  </Progress>
                  {label}
                  <Collapsible.Indicator flex="1" justify="end" />
                </Button>
              </Collapsible.Trigger>
            );
          }}
        </Toc.Context>
        <Collapsible.Content asChild>
          <Surface rounded="12" p="4" mt="8">
            <Toc.List gap="2">
              {items.map((item) => (
                <Toc.Item item={item} key={item.value}>
                  <Toc.Link asChild href={`#${item.value}`}>
                    <Item size="sm" variant="secondary" justify="start">
                      {item.label}
                    </Item>
                  </Toc.Link>
                </Toc.Item>
              ))}
            </Toc.List>
          </Surface>
        </Collapsible.Content>
      </Collapsible>
      <Toc.Content pt="32" ref={contentRef} h="32rem" spaceY="56" pr="16">
        {items.map((item) => (
          <Section key={item.value} spaceY="20">
            <Text
              as="div"
              id={item.value}
              fontWeight="500"
              fontSize={[18, 20]}
              data-depth={item.depth}
            >
              {item.label}
            </Text>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus pretium cursus lacus condimentum varius. Nulla
                lacinia, leo quis tincidunt auctor, justo magna sodales dolor,
                vel lobortis velit urna ac odio. Fusce mi ipsum, ullamcorper a
                est vel, ornare auctor massa. Proin hendrerit dui eget semper
                posuere. Etiam vulputate, purus eget euismod bibendum, elit
                lacus dictum nibh, id bibendum nisl augue id dolor. Quisque
                ipsum ligula, porta eget feugiat eu, congue et ex. Cras
                ullamcorper ante enim, nec varius nisl varius ac. Cras interdum
                eu nisi id vehicula. Maecenas congue ligula sed vehicula
                blandit. Donec tristique est sed est euismod, in congue diam
                euismod. Ut gravida elit et nibh pretium, eu varius lacus
                mattis. Suspendisse at mollis purus, vitae vestibulum quam.
                Integer vehicula id libero non fringilla. Ut quam justo,
                faucibus ac purus vitae, vulputate gravida sem.
              </p>
            </div>
          </Section>
        ))}
      </Toc.Content>
    </Toc>
  );
}
