import { Icon, Stat } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Indicator",
	component: Stat,
});

export const Indicator = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `Stat.Indicator` to display a trend or status icon within the help text.",
			},
		},
	},
	render: (args) => (
		<Stat
			flex="0"
			align="center"
			{...args}
		>
			<Stat.Label>Active Users</Stat.Label>
			<Stat.ValueText>1,234</Stat.ValueText>
			<Stat.HelpText color="success.primary">
				<Stat.Indicator>
					<Icon
						icon="tabler:trending-up"
						width={12}
						height={12}
					/>
				</Stat.Indicator>
				12% increase
			</Stat.HelpText>
		</Stat>
	),
});
