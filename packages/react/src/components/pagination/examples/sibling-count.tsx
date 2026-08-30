import { Button, Icon, Item, Pagination } from "@moto-ui/react";

export default function SiblingCount() {
	return (
		<Pagination
			count={250}
			pageSize={20}
			siblingCount={2}
			defaultPage={6}
		>
			<Pagination.PrevTrigger asChild>
				<Button
					iconOnly
					variant="surface"
				>
					<Icon
						icon="tabler:arrow-left"
						width={16}
						height={16}
					/>
				</Button>
			</Pagination.PrevTrigger>
			<Pagination.Context>
				{(ctx) => {
					return ctx.pages.map((page, idx) => {
						if (page.type === "ellipsis") {
							return (
								<Pagination.Ellipsis
									asChild
									key={idx.toString()}
									index={idx}
								>
									<Item
										iconOnly
										variant="secondary"
									>
										...
									</Item>
								</Pagination.Ellipsis>
							);
						}
						return (
							<Pagination.Item
								key={idx.toString()}
								{...page}
							>
								<Item
									iconOnly
									variant="secondary"
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
					iconOnly
					variant="surface"
				>
					<Icon
						icon="tabler:arrow-right"
						width={16}
						height={16}
					/>
				</Button>
			</Pagination.NextTrigger>
		</Pagination>
	);
}
