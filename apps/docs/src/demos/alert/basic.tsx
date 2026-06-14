import { Alert, Container, Icon } from "@moto-ui/react";

export const Basic = () => (
	<Container maxW="fit">
		<Alert
			p="8"
			rounded="24"
		>
			<Alert.Indicator>
				<Icon
					icon="tabler:rosette-discount-check"
					width={20}
					height={20}
				/>
			</Alert.Indicator>
			<Alert.Content>
				<Alert.Title fontSize="14">
					Your message was sent to the recipient.
				</Alert.Title>
			</Alert.Content>
		</Alert>
	</Container>
);
