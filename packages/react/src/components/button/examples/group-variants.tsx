import { ButtonGroup, Container, For } from "@elemnts-ui/react";

export default function Variants() {
	return (
		<Container maxW="fit" spaceY="12">
			<For each={["primary", "secondary", "tertiary", "surface"]}>
				{(variant) => (
					<ButtonGroup size="sm" key={variant} variant={variant}>
						<ButtonGroup.Item>Excellent</ButtonGroup.Item>
						<ButtonGroup.Item>Good</ButtonGroup.Item>
						<ButtonGroup.Item>Poor</ButtonGroup.Item>
					</ButtonGroup>
				)}
			</For>
		</Container>
	);
}
