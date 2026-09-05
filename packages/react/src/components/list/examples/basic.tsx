import { Container, List } from "@elemnts-ui/react";

const items = [
	"Introduction to Elemnts UI",
	"Installation and Setup",
	"Component Overview",
	"Theming and Customization",
	"Contributing Guidelines",
];

export default function Basic() {
	return (
		<Container maxW="fit">
			<List>
				{items.map((item) => (
					<List.Item key={item}>{item}</List.Item>
				))}
			</List>
		</Container>
	);
}
