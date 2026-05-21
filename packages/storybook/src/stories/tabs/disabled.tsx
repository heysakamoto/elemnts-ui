import preview from "@.storybook/preview";
import { Container, Tabs, Text } from "@moto-ui/react";

const tabs = [
	{
		disabled: false,
		value: "overview",
		label: "Overview",
		content: "View your project overview and recent activity.",
	},
	{
		disabled: false,
		value: "analytics",
		label: "Analytics",
		content: "Track your metrics and analyze performance data.",
	},
	{
		disabled: true,
		value: "reports",
		label: "Reports",
		content: "Generate and view your reports.",
	},
];

const meta = preview.meta({
	title: "Disabled",
	component: Tabs,
});

export const Disabled = meta.story({
	args: {
		defaultValue: "overview",
	},
	parameters: {
		docs: {
			description: {
				story:
					"Set the disabled prop on Tabs.Trigger to disable a specific tab.",
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
							disabled={tab.disabled}
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
						>
							{tab.content}
						</Text>
					</Tabs.Content>
				))}
			</Tabs>
		</Container>
	),
});
