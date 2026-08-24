import { Button, Container, Group, Input, Pagination } from "@moto-ui/react";

export default function Store() {
	return (
		<Container maxW="16rem">
			<Pagination
				count={800}
				pageSize={10}
				defaultPage={4}
			>
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
	);
}
