import { Stat } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Unit",
	component: Stat,
});

export const Unit = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the `Stat.ValueUnit` to display units next to the value.",
			},
		},
	},
	render: (args) => (
		<Stat
			flex="0"
			align="center"
			{...args}
		>
			<Stat.Label>Storage used</Stat.Label>
			<Stat.ValueText>
				12.4
				<Stat.ValueUnit>GB</Stat.ValueUnit>
			</Stat.ValueText>
			<Stat.HelpText>Out of 20GB</Stat.HelpText>
		</Stat>
	),
});
