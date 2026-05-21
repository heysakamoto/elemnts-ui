import { Alert, Container, Icon, Surface } from "@moto-ui/react";

export const Basic = () => (
	<Container maxW="fit">
		<Surface
			p="8"
			delta={1}
			rounded="24"
		>
			<Alert.Root colorPalette="success">
				<Alert.Media>
					<Icon
						icon="tabler:rosette-discount-check"
						width={20}
						height={20}
					/>
				</Alert.Media>
				<Alert.Title fontSize="14">
					Your message was sent to the recipient.
				</Alert.Title>
			</Alert.Root>
		</Surface>
	</Container>
);
