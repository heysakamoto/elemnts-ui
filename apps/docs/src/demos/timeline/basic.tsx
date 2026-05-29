import { Container, Surface, Timeline } from "@moto-ui/react";

export function Basic() {
	return (
		<Container maxW="24rem">
			<Timeline>
				{events.map((event, idx) => {
					const key = idx.toString();
					return (
						<Timeline.Item key={key}>
							<Timeline.Content>
								<Surface
									p="0"
									delta={0}
									rounded="0"
									elevated={false}
								>
									<Surface.Content gap="4">
										<Surface.Title fontSize="14">{event.title}</Surface.Title>
										<Surface.Description>
											{event.description}
										</Surface.Description>
									</Surface.Content>
								</Surface>
							</Timeline.Content>
						</Timeline.Item>
					);
				})}
			</Timeline>
		</Container>
	);
}

const events = [
	{
		title: "Project Kickoff",
		icon: "tabler:calendar",
		description: "Initial planning and requirements gathering with the team.",
	},
	{
		title: "Design Phase",
		description: "UI/UX design and prototype creation for the core interface.",
	},
	{
		title: "Alpha Release",
		description: "First internal release with basic functionality for testing.",
	},
	{
		title: "Beta Launch",
		description:
			"Public beta with feature-complete implementation and documentation.",
	},
	{
		title: "Version 1.0",
		description: "Stable release with production-ready features and support.",
	},
];
