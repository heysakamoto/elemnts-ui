import { Chip, Container, Icon, List } from "@moto-ui/react";

const features = [
  {
    text: "Built with Ark UI primitives",
    icon: "tabler:bulb",
  },
  {
    text: "Styled with Panda CSS",
    icon: "tabler:paint",
  },
  {
    text: "Accessible by default",
    icon: "tabler:accessible",
  },
  {
    text: "TypeScript-first API",
    icon: "tabler:brand-typescript",
  },
  {
    text: "Tree-shakeable exports",
    icon: "tabler:leaf",
  },
];

export default function WithIndicator() {
  return (
    <Container maxW="fit">
      <List>
        {features.map((feature) => (
          <List.Item key={feature.text}>
            <List.Indicator asChild>
              <Chip iconOnly size="2xs" variant="secondary">
                <Icon width={18} height={18} icon={feature.icon} />
              </Chip>
            </List.Indicator>
            {feature.text}
          </List.Item>
        ))}
      </List>
    </Container>
  );
}
