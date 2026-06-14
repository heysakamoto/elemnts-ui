import { Alert, Container, Icon } from "@moto-ui/react";

export const Status = () => (
	<Container maxW="fit">
		<Alert
			p="8"
			rounded="24"
			status="warning"
		>
			<Alert.Indicator>
				<Icon
					icon="tabler:info-circle"
					width={20}
					height={20}
				/>
			</Alert.Indicator>
			<Alert.Content>
				<Alert.Title>This is a warning message</Alert.Title>
			</Alert.Content>
		</Alert>
	</Container>
);
