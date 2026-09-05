import { Container, Kbd, KbdGroup } from "@elemnts-ui/react";

export default function Palettes() {
	return (
		<Container>
			<KbdGroup direction="column" gap="12" align="center">
				<Kbd>⌘ K</Kbd>
				<Kbd colorPalette="accent">⌘ K</Kbd>
			</KbdGroup>
		</Container>
	);
}
