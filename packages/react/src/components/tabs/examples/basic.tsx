import { Container, Tabs, Text } from "@elemnts-ui/react";

const tabs = [
	{
		value: "overview",
		label: "Overview",
		content: "View your project overview and recent activity.",
	},
	{
		value: "analytics",
		label: "Analytics",
		content: "Track your metrics and analyze performance data.",
	},
	{
		value: "reports",
		label: "Reports",
		content: "Generate and view your reports.",
	},
];

export default function Basic() {
	return (
		<Container maxW="20rem">
			<Tabs gap="20" defaultValue="overview">
				<Tabs.List w="full">
					<Tabs.Indicator />
					{tabs.map((tab) => (
						<Tabs.Trigger key={tab.value} value={tab.value}>
							{tab.label}
						</Tabs.Trigger>
					))}
				</Tabs.List>
				{tabs.map((tab) => (
					<Tabs.Content key={tab.value} value={tab.value}>
						<Text fontSize="14">{tab.content}</Text>
					</Tabs.Content>
				))}
			</Tabs>
		</Container>
	);
}
