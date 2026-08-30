import { ButtonGroup, Container, Stack } from "@moto-ui/react";

export default function Palettes() {
	return (
		<Container>
			<Stack
				direction="column"
				gap="16"
				align="center"
			>
				<ButtonGroup
					attached
					colorPalette="neutral"
				>
					<ButtonGroup.Item roundedStart="16">
						Photos
						<ButtonGroup.Separator />
					</ButtonGroup.Item>
					<ButtonGroup.Item roundedEnd="16">Videos</ButtonGroup.Item>
				</ButtonGroup>
			</Stack>
		</Container>
	);
}
