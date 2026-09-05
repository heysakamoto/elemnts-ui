import { Container, List } from "@elemnts-ui/react";

export default function Nested() {
	return (
		<Container maxW="fit">
			<List>
				<List.Item>
					Getting Started
					<List css={{ pl: "16", mt: "2" }}>
						<List.Item>Installation</List.Item>
						<List.Item>Quick Start</List.Item>
					</List>
				</List.Item>
				<List.Item>
					Components
					<List css={{ pl: "16", mt: "2" }}>
						<List.Item>Layout Components</List.Item>
						<List.Item>Form Components</List.Item>
					</List>
				</List.Item>
				<List.Item>Customization</List.Item>
				<List.Item>Deployment</List.Item>
			</List>
		</Container>
	);
}
