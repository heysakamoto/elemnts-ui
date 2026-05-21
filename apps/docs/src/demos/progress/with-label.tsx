import { Container, Progress, Stack } from "@moto-ui/react";

export const WithLabel = () => {
	return (
		<Container
			maxW="16rem"
			py="4"
		>
			<Progress.Root defaultValue={60}>
				<Stack
					justify="space-between"
					align="center"
					mb="8"
				>
					<Progress.Label fontSize="12">Installing...</Progress.Label>
					<Progress.ValueText
						fontSize="12"
						color="fg.tertiary"
					/>
				</Stack>
				<Progress.Track>
					<Progress.Range />
				</Progress.Track>
			</Progress.Root>
		</Container>
	);
};
