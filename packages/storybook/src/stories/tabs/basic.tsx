import preview from "@.storybook/preview";
import { Container, Tabs, Text } from "@moto-ui/react";

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

const meta = preview.meta({
	title: "Basic",
	component: Tabs,
});

export const Basic = meta.story({
	args: {
		defaultValue: "overview",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Use Tabs to organize related content into a tabbed interface. Place your tab controls inside Tabs.List, optionally include Tabs.Indicator for an active-state underline or highlight, and render one Tabs.Content panel per tab.",
			},
		},
	},
	render: (args) => (
		<Container maxW="20rem">
			<Tabs
				gap="20"
				{...args}
			>
				<Tabs.List>
					<Tabs.Indicator />
					{tabs.map((tab) => (
						<Tabs.Trigger
							key={tab.value}
							value={tab.value}
						>
							{tab.label}
						</Tabs.Trigger>
					))}
				</Tabs.List>
				{tabs.map((tab) => (
					<Tabs.Content
						key={tab.value}
						value={tab.value}
					>
						<Text
							fontSize="14"
							color="fg.secondary"
							textAlign="center"
						>
							{tab.content}
						</Text>
					</Tabs.Content>
				))}
			</Tabs>
		</Container>
	),
});
