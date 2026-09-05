import { Chip, Container, For, Stack } from "@elemnts-ui/react";

const variants = [
	"primary",
	"secondary",
	"tertiary",
	"surface",
	"ghost",
] as const;

export default function Variants() {
	return (
		<Container>
			<Stack gap="8" align="center" justify="center">
				<For each={variants}>
					{(variant) => (
						<Chip size="sm" key={variant} variant={variant}>
							Chip
						</Chip>
					)}
				</For>
			</Stack>
		</Container>
	);
}
