import {
	Button,
	Container,
	Group,
	Icon,
	Pagination,
	Surface,
	VisuallyHidden,
} from "@elemnts-ui/react";

export default function Store() {
	return (
		<Container maxW="16rem">
			<Pagination count={800} pageSize={10} defaultPage={4}>
				<Group justify="center" w="full">
					<Pagination.PrevTrigger asChild>
						<Button iconOnly variant="tertiary">
							<VisuallyHidden>Prev</VisuallyHidden>
							<Icon icon="tabler:arrow-left" width={16} height={16} />
						</Button>
					</Pagination.PrevTrigger>
					<Pagination.Context>
						{(ctx) => {
							return (
								<Surface p="12" delta={1} flexGrow={1} rounded="16">
									<Surface.Title justify="center">
										{`Page ${ctx.page}`}
									</Surface.Title>
								</Surface>
							);
						}}
					</Pagination.Context>
					<Pagination.NextTrigger asChild>
						<Button variant="tertiary">
							<VisuallyHidden>Next</VisuallyHidden>
							<Icon icon="tabler:arrow-right" width={16} height={16} />
						</Button>
					</Pagination.NextTrigger>
				</Group>
			</Pagination>
		</Container>
	);
}
