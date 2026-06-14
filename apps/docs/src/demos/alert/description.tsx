import { Alert, Container, Icon, Text } from "@moto-ui/react";

export const Description = () => (
	<Container maxW="24rem">
		<Alert
			p="12"
			rounded="24"
		>
			<Alert.Indicator>
				<Icon
					icon="tabler:message-dots"
					width={20}
					height={20}
				/>
			</Alert.Indicator>
			<Alert.Content>
				<Alert.Title>Emma is typing...</Alert.Title>
				<Alert.Description>
					Resume your conversation with{" "}
					<Text
						as="span"
						color="fg"
					>
						Emma
					</Text>{" "}
					or view the message anonymously.
				</Alert.Description>
			</Alert.Content>
		</Alert>
	</Container>
);
