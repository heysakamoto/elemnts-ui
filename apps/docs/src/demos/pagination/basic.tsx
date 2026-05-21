import { Button, Item, Pagination, Text } from "@moto-ui/react";

export function Basic() {
	return (
		<Pagination
			defaultPage={4}
			count={800}
			pageSize={10}
		>
			<Pagination.PrevTrigger asChild>
				<Button
					rounded="full"
					colorPalette="neutral"
					variant="surface"
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
								>
									<Text>...</Text>
								</Pagination.Ellipsis>
							);
						}
						return (
							<Pagination.Item
								key={idx.toString()}
								{...page}
							>
								<Item
									rounded="full"
									selected={page.value === ctx.page}
									iconOnly
									colorPalette="neutral"
									variant="secondary"
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
					rounded="full"
					colorPalette="neutral"
					variant="surface"
				>
					Next
				</Button>
			</Pagination.NextTrigger>
		</Pagination>
	);
}
