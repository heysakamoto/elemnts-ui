import { Container, SeparatorGroup } from "@moto-ui/react";

export function Caption() {
	return (
		<Container maxW="20rem">
			<SeparatorGroup orientation="horizontal">
				<SeparatorGroup.Item flexGrow="1" />
				<SeparatorGroup.Caption>or continue with</SeparatorGroup.Caption>
				<SeparatorGroup.Item flexGrow="1" />
			</SeparatorGroup>
		</Container>
	);
}
