import { Button, Container, EmptyState, Icon } from "@elemnts-ui/react";

export default function WithAction() {
	return (
		<Container maxW="24rem">
			<EmptyState.Root>
				<EmptyState.Content>
					<EmptyState.Indicator>
						<Icon icon="tabler:inbox" width={32} height={32} />
					</EmptyState.Indicator>
					<EmptyState.Title mt="12">Your inbox is empty</EmptyState.Title>
					<EmptyState.Description mt="4" textAlign="center">
						When you receive messages, they will appear here. Start a
						conversation to get things going.
					</EmptyState.Description>
					<EmptyState.Control mt="12">
						<Button size="sm">New Message</Button>
					</EmptyState.Control>
				</EmptyState.Content>
			</EmptyState.Root>
		</Container>
	);
}
