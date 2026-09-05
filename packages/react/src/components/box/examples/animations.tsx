import { Group, Surface } from "@elemnts-ui/react";

export default function Animations() {
	return (
		<Group gap="12">
			<Surface
				delta={1}
				boxSize="48"
				rounded="12"
				animation="rotate-in 2s ease-in-out infinite alternate"
			/>
			<Surface
				delta={1}
				boxSize="48"
				rounded="12"
				animation="flip-in 2s ease-in-out infinite"
			/>
			<Surface
				delta={1}
				boxSize="48"
				rounded="12"
				animation="float 2s ease-in-out infinite"
			/>
		</Group>
	);
}
