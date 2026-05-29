import { Container, Separator, Surface, Timeline } from "@moto-ui/react";

export function Outline() {
	return (
		<Container maxW="24rem">
			<Timeline>
				{events.map((event, idx) => {
					const key = idx.toString();
					return (
						<Timeline.Item
							key={key}
							gap="24"
						>
							<Timeline.Connector>
								<Timeline.Separator asChild>
									<Separator
										orientation="vertical"
										h="full"
									/>
								</Timeline.Separator>
							</Timeline.Connector>
							<Timeline.Content>
								<Surface
									delta={0}
									p="0"
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
		title: "Research",
		icon: "tabler:search",
		description: "Market research and competitive analysis completed.",
	},
	{
		title: "Development",
		icon: "tabler:code",
		description: "Core architecture and feature development in progress.",
	},
	{
		title: "Testing",
		icon: "tabler:test",
		description: "Quality assurance and user acceptance testing.",
	},
	{
		title: "Launch",
		icon: "tabler:rocket",
		description: "Public launch and go-to-market execution.",
	},
];
