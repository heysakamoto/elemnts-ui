import { Container, Icon, List } from "@moto-ui/react";

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

export function WithIndicator() {
	return (
		<Container maxW="fit">
			<List fontSize="14">
				{features.map((feature) => (
					<List.Item key={feature.text}>
						<List.Indicator color="fg.tertiary">
							<Icon
								width={18}
								height={18}
								icon={feature.icon}
							/>
						</List.Indicator>
						{feature.text}
					</List.Item>
				))}
			</List>
		</Container>
	);
}
