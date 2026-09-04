import { ButtonGroup, Container } from "@moto-ui/react";

export default function Palettes() {
	return (
		<Container maxW="fit">
			<ButtonGroup colorPalette="accent">
				<ButtonGroup.Item>Photos</ButtonGroup.Item>
				<ButtonGroup.Item>Videos</ButtonGroup.Item>
			</ButtonGroup>
		</Container>
	);
}
