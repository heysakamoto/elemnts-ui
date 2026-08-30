import { Container, SeparatorGroup } from "@moto-ui/react";

export default function Basic() {
	return (
		<Container maxW="12rem">
			<SeparatorGroup orientation="horizontal">
				<SeparatorGroup.Item />
				<SeparatorGroup.Item />
				<SeparatorGroup.Item />
			</SeparatorGroup>
		</Container>
	);
}
