import { Button, Chip, Group, Item, Pagination } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Attached",
	component: Pagination,
});

export const Attached = meta.story({
	args: {
		count: 800,
		pageSize: 10,
		defaultPage: 1,
	},
	parameters: {
		docs: {
			description: {
				story:
					"This example shows how to use the `Group` component to visually attach pagination items and triggers.",
			},
		},
	},
	render: (args) => (
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
						return ctx.pages.map((page, idx) => {
							if (page.type === "ellipsis") {
								return (
									<Pagination.Ellipsis
										key={idx.toString()}
										index={idx}
										asChild
									>
										<Chip
											size="lg"
											variant="tertiary"
										>
											...
										</Chip>
									</Pagination.Ellipsis>
								);
							}
							return (
								<Pagination.Item
									key={idx.toString()}
									{...page}
									asChild
								>
									<Item
										iconOnly
										surface="tertiary"
										variant="secondary"
										colorPalette="neutral"
										selected={page.value === ctx.page}
									>
										{page.value}
									</Item>
								</Pagination.Item>
							);
						});
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
	),
});
