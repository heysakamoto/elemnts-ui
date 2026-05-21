import { Kbd, Text } from "@moto-ui/react";

export function Inline() {
	return (
		<Text
			fontSize="14"
			color="fg.secondary"
		>
			Use{" "}
			<Kbd
				variant="secondary"
				colorPalette="neutral"
			>
				<Kbd.Item>⌘ K</Kbd.Item>
			</Kbd>{" "}
			to open the command palette.
		</Text>
	);
}
