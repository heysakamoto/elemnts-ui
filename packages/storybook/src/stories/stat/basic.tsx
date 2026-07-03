import { Stat } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: Stat,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Stat` component is used to display a single statistic or data point, often with a label and a comparison to a previous period.",
			},
		},
	},
	render: (args) => (
		<Stat
			flex="0"
			{...args}
		>
			<Stat.Label>Total Revenue</Stat.Label>
			<Stat.ValueText>$45,231.89</Stat.ValueText>
			<Stat.HelpText>+20.1% from last month</Stat.HelpText>
		</Stat>
	),
});
