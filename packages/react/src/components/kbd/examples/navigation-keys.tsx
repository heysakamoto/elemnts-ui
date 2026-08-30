import { Container, Kbd, KbdGroup } from "@moto-ui/react";

export default function NavigationKeys() {
	return (
		<Container
			maxW="24rem"
			spaceY="8"
		>
			<KbdGroup
				variant="secondary"
				justify="center"
			>
				<Kbd>↑</Kbd>
				<Kbd>↓</Kbd>
				<Kbd>←</Kbd>
				<Kbd>→</Kbd>
			</KbdGroup>
			<KbdGroup
				variant="secondary"
				justify="center"
			>
				<Kbd>↵</Kbd>
				<Kbd>⇧</Kbd>
				<Kbd>⌥</Kbd>
				<Kbd>⌘</Kbd>
			</KbdGroup>
			<KbdGroup
				variant="secondary"
				justify="center"
			>
				<Kbd>⇞</Kbd>
				<Kbd>⇟</Kbd>
				<Kbd>↖</Kbd>
				<Kbd>↗</Kbd>
			</KbdGroup>
		</Container>
	);
}
