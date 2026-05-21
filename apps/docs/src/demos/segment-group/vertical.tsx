import { SegmentGroup } from "@moto-ui/react";

export const Vertical = () => {
	const options = [
		{ label: "Option 1", value: "1" },
		{ label: "Option 2", value: "2" },
		{ label: "Option 3", value: "3" },
	];

	return (
		<SegmentGroup.Root
			defaultValue="1"
			orientation="vertical"
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
	);
};
