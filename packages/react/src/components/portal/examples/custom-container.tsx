import { Portal, Stack, Surface } from "@elemnts-ui/react";
import { useRef } from "react";

export default function CustomContainer() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<Stack ref={containerRef}>
			<Portal container={containerRef}>
				<Surface p="12" delta={1}>
					<Surface.Title>Portalled into the dashed box</Surface.Title>
				</Surface>
			</Portal>
		</Stack>
	);
}
