import { Progress } from "@moto-ui/react";

export function Indeterminate() {
	return (
		<Progress.Root value={null}>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
		</Progress.Root>
	);
}
