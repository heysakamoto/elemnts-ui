import { Alert, Container, For, Icon } from "@elemnts-ui/react";

const statuses = [
	"default",
	"info",
	"warning",
	"success",
	"destructive",
] as const;

export default function Status() {
	return (
		<Container maxW="fit" spaceY="12">
			<For each={statuses}>
				{(status) => (
					<Alert status={status} key={status}>
						<Alert.Indicator>
							<Icon icon="tabler:info-circle" width={20} height={20} />
						</Alert.Indicator>
						<Alert.Content>
							<Alert.Title>This is a {status} message</Alert.Title>
						</Alert.Content>
					</Alert>
				)}
			</For>
		</Container>
	);
}
