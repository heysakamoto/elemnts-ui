import { Icon, Stat } from "@moto-ui/react";

export default function Indicator() {
	return (
		<Stat
			flex="0"
			align="center"
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
	);
}
