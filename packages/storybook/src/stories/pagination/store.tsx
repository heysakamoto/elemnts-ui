import preview from "@.storybook/preview";
import { Button, Container, Group, Input, Pagination } from "@moto-ui/react";

const meta = preview.meta({
	title: "Store",
	component: Pagination,
});

export const Store = meta.story({
	args: {
		count: 800,
		pageSize: 10,
		defaultPage: 4,
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use `Pagination.Context` or the `usePaginationContext` hook to access pagination state and call helpers like `setPage`, `setPageSize`, `goToNextPage`, `goToPrevPage`, `goToFirstPage`, and `goToLastPage`.",
			},
		},
	},
	render: (args) => (
		<Container maxW="16rem">
			<Pagination {...args}>
				<Group attached>
					<Pagination.PrevTrigger asChild>
						<Button
							roundedStart="24"
							variant="tertiary"
							colorPalette="neutral"
						>
							Prev
						</Button>
					</Pagination.PrevTrigger>
					<Pagination.Context>
						{(ctx) => {
							return (
								<Input
									fontSize="14"
									textAlign="center"
									value={`Page ${ctx.page}`}
								/>
							);
						}}
					</Pagination.Context>
					<Pagination.NextTrigger asChild>
						<Button
							roundedEnd="24"
							variant="tertiary"
							colorPalette="neutral"
						>
							Next
						</Button>
					</Pagination.NextTrigger>
				</Group>
			</Pagination>
		</Container>
	),
});
