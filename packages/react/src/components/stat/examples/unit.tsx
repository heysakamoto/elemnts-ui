import { Stat } from "@moto-ui/react";

export default function Unit() {
	return (
		<Stat
			flex="0"
			align="center"
		>
			<Stat.Label>Storage used</Stat.Label>
			<Stat.ValueText>
				12.4
				<Stat.ValueUnit>GB</Stat.ValueUnit>
			</Stat.ValueText>
			<Stat.HelpText>Out of 20GB</Stat.HelpText>
		</Stat>
	);
}
