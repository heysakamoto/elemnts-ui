import { Container, Stat } from "@moto-ui/react";

export function Unit() {
	return (
		<Container maxW="20rem">
			<Stat.Root>
				<Stat.Label>Storage used</Stat.Label>
				<Stat.ValueText>
					12.4
					<Stat.ValueUnit>GB</Stat.ValueUnit>
				</Stat.ValueText>
				<Stat.HelpText>Out of 20GB</Stat.HelpText>
			</Stat.Root>
		</Container>
	);
}
