import { Button, Container, For, Stack } from "@moto-ui/react";

const variants = [
	"primary",
	"secondary",
	"tertiary",
	"ghost",
	"surface",
	"plain",
] as const;

export default function Variants() {
	return (
		<Container>
			<Stack
				gap="8"
				align="center"
				justify="center"
				wrap="wrap"
			>
				<For each={variants}>
					{(variant) => (
						<Button
							key={variant}
							size="sm"
							variant={variant}
						>
							Call us
						</Button>
					)}
				</For>
			</Stack>
		</Container>
	);
}
