import { ButtonGroup, Container, For } from "@elemnts-ui/react";

export default function Sizes() {
	return (
		<Container maxW="fit" spaceY="12">
			<For each={["sm", "md", "lg"]}>
				{(size) => (
					<ButtonGroup key={size} size={size} variant="secondary">
						<ButtonGroup.Item>Excellent</ButtonGroup.Item>
						<ButtonGroup.Item>Good</ButtonGroup.Item>
						<ButtonGroup.Item>Poor</ButtonGroup.Item>
					</ButtonGroup>
				)}
			</For>
		</Container>
	);
}
