import { Container, Progress } from "@elemnts-ui/react";

export default function Indeterminate() {
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
