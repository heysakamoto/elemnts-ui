import { Button, Container, For, Stack } from "@elemnts-ui/react";

const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

export default function Sizes() {
	return (
		<Container>
			<Stack gap="8" align="center" justify="center">
				<For each={sizes}>
					{(size) => (
						<Button key={size} size={size}>
							Roadmap
						</Button>
					)}
				</For>
			</Stack>
		</Container>
	);
}
