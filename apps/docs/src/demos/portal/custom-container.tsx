import { Portal, Stack, Surface } from "@moto-ui/react";
import { useRef } from "react";

export function CustomContainer() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<Stack
			gap="4"
			ref={containerRef}
		>
			<Portal container={containerRef}>
				<Surface
					p="12"
					delta={1}
				>
					<Surface.Title fontSize="14">
						Portalled into the dashed box
					</Surface.Title>
				</Surface>
			</Portal>
		</Stack>
	);
}
