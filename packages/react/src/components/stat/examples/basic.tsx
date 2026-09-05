import { Stat } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Stat flex="0">
			<Stat.Label>Total Revenue</Stat.Label>
			<Stat.ValueText>$45,231.89</Stat.ValueText>
			<Stat.HelpText>+20.1% from last month</Stat.HelpText>
		</Stat>
	);
}
