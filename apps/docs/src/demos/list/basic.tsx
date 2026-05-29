import { Container, List } from "@moto-ui/react";

const items = [
	"Introduction to Moto UI",
	"Installation and Setup",
	"Component Overview",
	"Theming and Customization",
	"Contributing Guidelines",
];

export function Basic() {
	return (
		<Container maxW="fit">
			<List fontSize="14">
				{items.map((item) => (
					<List.Item key={item}>{item}</List.Item>
				))}
			</List>
		</Container>
	);
}
