import { Alert, Button, Container, Icon } from "@moto-ui/react";

export const Control = () => (
	<Container maxW="24rem">
		<Alert.Root
			status="destructive"
			p="12"
			rounded="24"
		>
			<Alert.Indicator>
				<Icon
					icon="tabler:world-x"
					width={20}
					height={20}
				/>
			</Alert.Indicator>
			<Alert.Content>
				<Alert.Title>Build failed</Alert.Title>
				<Alert.Description>
					Something went wrong while building your project. Try again later.
				</Alert.Description>
			</Alert.Content>
			<Alert.Control>
				<Button
					size="2xs"
					rounded="24"
				>
					Fix
				</Button>
			</Alert.Control>
		</Alert.Root>
	</Container>
);
