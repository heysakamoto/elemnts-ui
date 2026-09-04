import { Box } from "@moto-ui/react";

export default function PseudoProps() {
	return (
		<Box
			p="4"
			rounded="12"
			boxSize="48"
			bgColor="surface.7"
			border="1px solid {colors.stroke.secondary}"
			_hover={{
				bgColor: "surface.8",
			}}
			_active={{
				outline: "2px solid {colors.accent.primary}",
			}}
		/>
	);
}
