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
			>
				<For each={variants}>
					{(variant) => (
						<Button
							size="sm"
							key={variant}
							variant={variant}
							flexShrink="0"
						>
							Call us
						</Button>
					)}
				</For>
			</Stack>
		</Container>
	);
}
