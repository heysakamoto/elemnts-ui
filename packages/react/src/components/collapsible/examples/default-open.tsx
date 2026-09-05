import { Collapsible, Container, Stack, Text } from "@elemnts-ui/react";

export default function DefaultOpen() {
	return (
		<Container maxW="20rem">
			<Collapsible defaultOpen>
				<Collapsible.Trigger h="36">
					What is this component?
					<Collapsible.Indicator />
				</Collapsible.Trigger>
				<Collapsible.Content>
					<Stack p="12" pt="4">
						<Text fontSize="14" color="fg.secondary">
							A collapsible with animated expansion, collapse, and chevron
							rotation.
						</Text>
					</Stack>
				</Collapsible.Content>
			</Collapsible>
		</Container>
	);
}
