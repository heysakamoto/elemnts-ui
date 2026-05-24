import { Container, Stat } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="20rem">
			<Stat.Root>
				<Stat.Label>Total Revenue</Stat.Label>
				<Stat.ValueText>$45,231.89</Stat.ValueText>
				<Stat.HelpText>+20.1% from last month</Stat.HelpText>
			</Stat.Root>
		</Container>
	);
}
