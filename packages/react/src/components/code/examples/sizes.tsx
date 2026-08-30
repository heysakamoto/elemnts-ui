import { Code, Container, For, Stack } from "@moto-ui/react";

const sizes = ["xl", "lg", "md", "sm", "xs", "2xs"] as const;

export default function Sizes() {
	return (
		<Container>
			<Stack
				wrap="wrap"
				gap="8"
				justify="center"
				align="center"
			>
				<For each={sizes}>
					{(size) => (
						<Code
							key={size}
							size={size}
						>
							Code
						</Code>
					)}
				</For>
			</Stack>
		</Container>
	);
}
