import { Container, For, Input } from "@moto-ui/react";

export default function Sizes() {
	return (
		<Container
			maxW="20rem"
			spaceY="12"
		>
			<For each={["xs", "sm", "md", "lg", "xl"]}>
				{(size) => (
					<Input
						size={size}
						placeholder="Type here..."
					/>
				)}
			</For>
		</Container>
	);
}
