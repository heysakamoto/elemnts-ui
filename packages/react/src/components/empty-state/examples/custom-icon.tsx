import { Container, EmptyState, Icon } from "@moto-ui/react";

export default function CustomIcon() {
	return (
		<Container maxW="24rem">
			<EmptyState.Root>
				<EmptyState.Content>
					<EmptyState.Indicator>
						<Icon
							width={32}
							height={32}
							icon="tabler:search-off"
						/>
					</EmptyState.Indicator>
					<EmptyState.Title mt="12">No results found</EmptyState.Title>
					<EmptyState.Description
						mt="4"
						textAlign="center"
					>
						Try adjusting your search terms or clearing your filters to find
						what you are looking for.
					</EmptyState.Description>
				</EmptyState.Content>
			</EmptyState.Root>
		</Container>
	);
}
