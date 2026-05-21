import { ButtonGroup, Container, Stack } from "@moto-ui/react";

export function Palettes() {
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
					<ButtonGroup.Item roundedStart="24">
						Photos
						<ButtonGroup.Separator />
					</ButtonGroup.Item>
					<ButtonGroup.Item roundedEnd="24">Videos</ButtonGroup.Item>
				</ButtonGroup>
			</Stack>
		</Container>
	);
}
