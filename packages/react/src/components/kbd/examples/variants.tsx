import { Container, For, Kbd, KbdGroup } from "@elemnts-ui/react";

const variants = [
	"primary",
	"secondary",
	"tertiary",
	"ghost",
	"surface",
] as const;

export default function Variants() {
	return (
		<Container>
			<KbdGroup justify="center">
				<For each={variants}>
					{(variant) => (
						<Kbd key={variant} variant={variant}>
							⌘ K
						</Kbd>
					)}
				</For>
			</KbdGroup>
		</Container>
	);
}
