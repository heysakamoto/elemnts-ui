import preview from "@.storybook/preview";
import { SegmentGroup } from "@moto-ui/react";

const options = [
	{ label: "Option 1", value: "1" },
	{ label: "Option 2", value: "2" },
	{ label: "Option 3", value: "3" },
];

const meta = preview.meta({
	title: "Vertical",
	component: SegmentGroup,
});

export const Vertical = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					'Use the `orientation="vertical"` prop to display segments vertically.',
			},
		},
	},
	render: (args) => (
		<SegmentGroup.Root
			defaultValue="1"
			orientation="vertical"
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
	),
});
