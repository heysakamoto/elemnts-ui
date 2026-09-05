import { Progress } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Progress.Root defaultValue={33}>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
		</Progress.Root>
	);
}
