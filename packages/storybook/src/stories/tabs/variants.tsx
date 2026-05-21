import preview from "@.storybook/preview";
import {
	Container,
	SegmentGroup,
	Stack,
	Tabs,
	type TabsRootProps,
	Text,
} from "@moto-ui/react";
import { useState } from "react";

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

const variants = ["primary", "secondary"];
type Variant = TabsRootProps["variant"];

const meta = preview.meta({
	title: "Variants",
	component: Tabs,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the variant prop to change the appearance of the tabs.",
			},
		},
	},
	render: (args) => {
		const [value, setValue] = useState("primary");

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
						{variants.map((variant) => (
							<SegmentGroup.Item
								key={variant}
								value={variant}
							>
								<SegmentGroup.ItemText>{variant}</SegmentGroup.ItemText>
								<SegmentGroup.ItemHiddenInput />
							</SegmentGroup.Item>
						))}
					</SegmentGroup>

					<Tabs
						variant={value as Variant}
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
