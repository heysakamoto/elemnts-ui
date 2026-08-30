import { Mark, Text } from "@moto-ui/react";

export default function Palettes() {
	return (
		<Text fontSize="16">
			Use different palette <Mark>colors</Mark> to{" "}
			<Mark colorPalette="accent">highlight</Mark> important words.
		</Text>
	);
}
