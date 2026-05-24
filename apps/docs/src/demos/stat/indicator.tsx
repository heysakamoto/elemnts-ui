import { Container, Icon, Stat } from "@moto-ui/react";

export function Indicator() {
	return (
		<Container maxW="20rem">
			<Stat.Root>
				<Stat.Label>Active Users</Stat.Label>
				<Stat.ValueText>1,234</Stat.ValueText>
				<Stat.HelpText>
					<Stat.Indicator>
						<Icon icon="tabler:trending-up" />
					</Stat.Indicator>
					12% increase
				</Stat.HelpText>
			</Stat.Root>
		</Container>
	);
}
