import { ButtonGroup, Container, Icon, Stack } from "@moto-ui/react";

export function Orientation() {
	return (
		<Container>
			<Stack
				direction="column"
				gap="16"
				align="center"
			>
				<ButtonGroup
					iconOnly
					attached
					variant="surface"
					orientation="vertical"
					colorPalette="warning"
				>
					<ButtonGroup.Item roundedTop="24">
						<Icon
							icon="tabler:search"
							width={16}
							height={16}
						/>
						<ButtonGroup.Separator />
					</ButtonGroup.Item>
					<ButtonGroup.Item>
						<Icon
							icon="tabler:copy"
							width={16}
							height={16}
						/>
						<ButtonGroup.Separator />
					</ButtonGroup.Item>
					<ButtonGroup.Item roundedBottom="24">
						<Icon
							icon="tabler:playlist-add"
							width={16}
							height={16}
						/>
					</ButtonGroup.Item>
				</ButtonGroup>
			</Stack>
		</Container>
	);
}
