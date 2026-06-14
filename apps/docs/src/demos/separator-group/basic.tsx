import { Container, SeparatorGroup } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="12rem">
			<SeparatorGroup orientation="horizontal">
				<SeparatorGroup.Item flexGrow="1" />
				<SeparatorGroup.Item flexGrow="1" />
				<SeparatorGroup.Item flexGrow="1" />
			</SeparatorGroup>
		</Container>
	);
}
