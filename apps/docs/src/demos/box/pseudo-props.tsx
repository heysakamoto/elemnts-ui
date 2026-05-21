import { Box } from "@moto-ui/react";

export function PseudoProps() {
	return (
		<Box
			p="4"
			boxSize="48"
			rounded="24"
			bgColor="bg.secondary"
			_hover={{
				bgColor: "gray.30",
			}}
			_active={{
				shadow: "0 0 0 2px {colors.accent.primary}",
			}}
		/>
	);
}
