import { Section, Text, Toc } from "@elemnts-ui/react";
import { useRef } from "react";

const items = [
  { value: "introduction", depth: 2, label: "Introduction" },
  {
    value: "getting-started",
    depth: 2,
    label: "Getting Started",
  },
  { value: "configuration", depth: 2, label: "Configuration" },
  { value: "usage", depth: 2, label: "Usage" },
  { value: "conclusion", depth: 2, label: "Conclusion" },
];

export default function Preview() {
  const contentRef = useRef<HTMLElement>(null);

  return (
    <Toc items={items} gap="32" scrollEl={() => contentRef.current}>
      <Toc.Content ref={contentRef} h="32rem" spaceY="56" pr="16">
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
      <Toc.Nav>
        <Toc.Title>On this page</Toc.Title>
        <Toc.List>
          {items.map((item) => (
            <Toc.Item key={item.value} item={item}>
              <Toc.Link href={`#${item.value}`}>{item.label}</Toc.Link>
            </Toc.Item>
          ))}
        </Toc.List>
      </Toc.Nav>
    </Toc>
  );
}
