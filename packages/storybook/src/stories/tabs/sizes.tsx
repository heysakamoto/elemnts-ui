import {
	Container,
	SegmentGroup,
	Stack,
	Tabs,
	type TabsRootProps,
	Text,
} from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

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

const sizes = ["xs", "sm", "md", "lg", "xl"];
type Size = TabsRootProps["size"];

const meta = preview.meta({
	title: "Sizes",
	component: Tabs,
});

export const Sizes = meta.story({
	args: {
		defaultValue: "overview",
	},
	parameters: {
		docs: {
			description: {
				story: "Use the size prop to change the size of the tabs.",
			},
		},
	},
	render: (args) => {
		const [value, setValue] = useState("md");

		return (
			<Container maxW="20rem">
				<Stack
					direction="column"
					align="center"
					gap="20"
				>
					<SegmentGroup
						fontFamily="mono"
						orientation="horizontal"
						size="xs"
						value={value}
						onValueChange={(e) => {
							setValue(e.value ?? "");
						}}
					>
						<SegmentGroup.Indicator />
						{sizes.map((size) => (
							<SegmentGroup.Item
								key={size}
								value={size}
							>
								<SegmentGroup.ItemText>{size}</SegmentGroup.ItemText>
								<SegmentGroup.ItemHiddenInput />
							</SegmentGroup.Item>
						))}
					</SegmentGroup>

					<Tabs
						size={value as Size}
						gap="20"
						defaultValue="overview"
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
				</Stack>
			</Container>
		);
	},
});
