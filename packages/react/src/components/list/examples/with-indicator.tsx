import { Chip, Container, List } from "@elemnts-ui/react";

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
				{features.map((feature, idx) => (
					<List.Item key={feature.text}>
						<List.Indicator asChild>
							<Chip iconOnly size="2xs" variant="secondary">
								{idx + 1}
							</Chip>
						</List.Indicator>
						{feature.text}
					</List.Item>
				))}
			</List>
		</Container>
	);
}
