import { ButtonGroup, Container, Icon } from "@elemnts-ui/react";

export default function Orientation() {
	return (
		<Container maxW="fit">
			<ButtonGroup fullWidth variant="secondary" orientation="vertical">
				<ButtonGroup.Item>
					<Icon icon="tabler:search" width={16} height={16} />
					Search
				</ButtonGroup.Item>
				<ButtonGroup.Item>
					<Icon icon="tabler:library" width={16} height={16} />
					Library
				</ButtonGroup.Item>
				<ButtonGroup.Item>
					<Icon icon="tabler:playlist" width={16} height={16} />
					Playlist
				</ButtonGroup.Item>
			</ButtonGroup>
		</Container>
	);
}
