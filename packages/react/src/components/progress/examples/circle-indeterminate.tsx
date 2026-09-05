import { Progress } from "@elemnts-ui/react";

export default function Indeterminate() {
	return (
		<Progress.Root value={null}>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
		</Progress.Root>
	);
}
