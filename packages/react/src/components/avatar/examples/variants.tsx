import { Avatar, Container, For, Stack } from "@moto-ui/react";

const variants = [
	"primary",
	"tertiary",
	"secondary",
	"ghost",
	"surface",
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
						<Avatar
							key={variant}
							variant={variant}
						>
							<Avatar.Fallback fontSize="13">Bo</Avatar.Fallback>
						</Avatar>
					)}
				</For>
			</Stack>
		</Container>
	);
}
