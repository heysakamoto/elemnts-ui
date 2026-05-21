import { Alert, Container, Icon, Surface, Text } from "@moto-ui/react";

export const Description = () => (
	<Container maxW="24rem">
		<Surface
			px="12"
			py="10"
			delta={1}
			rounded="24"
		>
			<Alert.Root>
				<Alert.Media>
					<Icon
						icon="tabler:message-dots"
						width={20}
						height={20}
					/>
				</Alert.Media>
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
			</Alert.Root>
		</Surface>
	</Container>
);
