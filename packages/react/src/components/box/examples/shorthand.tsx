import { Box } from "@moto-ui/react";

export default function Shorthand() {
	return (
		<Box
			p="4"
			boxSize="48"
			rounded="16"
			bgColor="surface.7"
			border="1px solid {colors.stroke.secondary}"
		/>
	);
}
