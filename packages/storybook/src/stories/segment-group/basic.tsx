import preview from "@.storybook/preview";
import { Container, SegmentGroup } from "@moto-ui/react";

const options = [
	{ label: "Daily", value: "daily" },
	{ label: "Weekly", value: "weekly" },
	{ label: "Monthly", value: "monthly" },
];

const meta = preview.meta({
	title: "Basic",
	component: SegmentGroup,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `SegmentGroup` component is a compound component used for selecting a single option from a set of options.",
			},
		},
	},
	render: (args) => (
		<Container maxW="fit">
			<SegmentGroup.Root
				defaultValue="daily"
				{...args}
			>
				<SegmentGroup.Indicator />
				{options.map((option) => (
					<SegmentGroup.Item
						key={option.value}
						value={option.value}
					>
						<SegmentGroup.ItemText>{option.label}</SegmentGroup.ItemText>
						<SegmentGroup.ItemHiddenInput />
					</SegmentGroup.Item>
				))}
			</SegmentGroup.Root>
		</Container>
	),
});
