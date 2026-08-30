import { Avatar, Container, For, Stack } from "@moto-ui/react";

const palettes = [
	"accent",
	"neutral",
	"success",
	"warning",
	"destructive",
] as const;

export default function Colors() {
	return (
		<Container>
			<Stack
				direction="row"
				gap="8"
				align="center"
				justify="center"
			>
				<For each={palettes}>
					{(palette) => (
						<Avatar
							key={palette}
							colorPalette={palette}
						>
							<Avatar.Fallback fontSize="13">V</Avatar.Fallback>
						</Avatar>
					)}
				</For>
			</Stack>
		</Container>
	);
}
