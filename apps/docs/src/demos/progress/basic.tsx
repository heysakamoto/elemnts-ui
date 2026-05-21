import { Container, Progress } from "@moto-ui/react";

export const Basic = () => {
	return (
		<Container
			maxW="12rem"
			py="4"
		>
			<Progress.Root defaultValue={40}>
				<Progress.Track>
					<Progress.Range />
				</Progress.Track>
			</Progress.Root>
		</Container>
	);
};
