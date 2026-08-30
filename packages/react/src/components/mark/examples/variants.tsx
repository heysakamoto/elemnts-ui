import { Container, For, Mark, Stack, Text } from "@moto-ui/react";

const variants = ["primary", "secondary", "tertiary", "underline"] as const;

export default function Variants() {
	return (
		<Container>
			<Stack
				direction="column"
				gap="16"
				align="center"
			>
				<For each={variants}>
					{(variant) => (
						<Text
							fontSize="16"
							key={variant}
						>
							This text is marked with the{" "}
							<Mark variant={variant}>{variant}</Mark> variant.
						</Text>
					)}
				</For>
			</Stack>
		</Container>
	);
}
