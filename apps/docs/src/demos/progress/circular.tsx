import { Progress } from "@moto-ui/react";

export function Circular() {
	return (
		<Progress.Root defaultValue={33}>
			<Progress.Circle>
				<Progress.CircleTrack />
				<Progress.CircleRange />
			</Progress.Circle>
		</Progress.Root>
	);
}
