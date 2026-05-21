import { Alert, Container, Icon, Surface } from "@moto-ui/react";

export const Palettes = () => (
	<Container maxW="fit">
		<Surface
			p="8"
			delta={1}
			rounded="24"
		>
			<Alert.Root colorPalette="warning">
				<Alert.Media>
					<Icon
						icon="tabler:info-circle"
						width={20}
						height={20}
					/>
				</Alert.Media>
				<Alert.Title>This is a warning message</Alert.Title>
			</Alert.Root>
		</Surface>
	</Container>
);
