import { Container, List } from "@moto-ui/react";

export function Nested() {
	return (
		<Container maxW="fit">
			<List fontSize="14">
				<List.Item>
					Getting Started
					<List css={{ pl: "16", mt: "2" }}>
						<List.Item>Installation</List.Item>
						<List.Item>Quick Start</List.Item>
						<List.Item>Project Structure</List.Item>
					</List>
				</List.Item>
				<List.Item>
					Components
					<List css={{ pl: "16", mt: "2" }}>
						<List.Item>Layout Components</List.Item>
						<List.Item>Form Components</List.Item>
						<List.Item>Data Display</List.Item>
						<List.Item>Overlays</List.Item>
					</List>
				</List.Item>
				<List.Item>Customization</List.Item>
				<List.Item>Deployment</List.Item>
			</List>
		</Container>
	);
}
