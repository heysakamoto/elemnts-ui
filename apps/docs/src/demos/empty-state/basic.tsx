import { Container, EmptyState, Icon } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="24rem">
			<EmptyState.Root>
				<EmptyState.Content>
					<EmptyState.Indicator>
						<Icon
							width={32}
							height={32}
							icon="tabler:database"
						/>
					</EmptyState.Indicator>
					<EmptyState.Title mt="12">No data available</EmptyState.Title>
					<EmptyState.Description
						mt="4"
						textAlign="center"
					>
						There are no records to display at this time. Add new data or adjust
						your filters.
					</EmptyState.Description>
				</EmptyState.Content>
			</EmptyState.Root>
		</Container>
	);
}
