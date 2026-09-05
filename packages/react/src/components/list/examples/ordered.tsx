import { Container, List } from "@elemnts-ui/react";

const steps = [
	"Create a new project",
	"Install dependencies",
	"Configure your theme",
	"Import and use components",
	"Build and deploy",
];

export default function Ordered() {
	return (
		<Container maxW="fit">
			<List as="ol" fontSize="14" listStyle="decimal">
				{steps.map((step) => (
					<List.Item key={step}>{step}</List.Item>
				))}
			</List>
		</Container>
	);
}
