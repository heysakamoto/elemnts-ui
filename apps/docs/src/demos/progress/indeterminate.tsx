import { Container, Progress } from "@moto-ui/react";

export function Indeterminate() {
	return (
		<Container maxW="12rem">
			<Progress.Root value={null}>
				<Progress.Track>
					<Progress.Range />
				</Progress.Track>
			</Progress.Root>
		</Container>
	);
}
