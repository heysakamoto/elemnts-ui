import { Container, For, Textarea } from "@moto-ui/react";

export default function Sizes() {
	return (
		<Container maxW="20rem">
			<For each={["xs", "sm", "md", "lg", "xl"]}>
				{(size) => (
					<Textarea
						size={size}
						placeholder="Type your message here..."
					/>
				)}
			</For>
		</Container>
	);
}
