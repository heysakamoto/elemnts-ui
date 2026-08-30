import { ButtonGroup, Container, Icon, Stack } from "@moto-ui/react";

export default function Orientation() {
	return (
		<Container>
			<Stack
				gap="8"
				align="center"
				direction="column"
			>
				<ButtonGroup
					attached
					variant="secondary"
					orientation="vertical"
				>
					<ButtonGroup.Item roundedTop="16">
						<Icon
							icon="tabler:search"
							width={16}
							height={16}
						/>
						Search
					</ButtonGroup.Item>
					<ButtonGroup.Item>
						<Icon
							icon="tabler:library"
							width={16}
							height={16}
						/>
						Library
					</ButtonGroup.Item>
					<ButtonGroup.Item roundedBottom="16">
						<Icon
							icon="tabler:playlist"
							width={16}
							height={16}
						/>
						Playlist
					</ButtonGroup.Item>
				</ButtonGroup>
			</Stack>
		</Container>
	);
}
