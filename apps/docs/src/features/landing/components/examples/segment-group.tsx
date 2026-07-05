import { SegmentGroup } from "@moto-ui/react";

export function SegmentGroupExample() {
	const values = [
		{
			label: "Ark",
			value: "ark",
		},
		{
			label: "Pandacss",
			value: "pandacss",
		},
		{
			label: "Moto",
			value: "moto",
		},
	];

	return (
		<SegmentGroup
			orientation="horizontal"
			defaultValue="ark"
		>
			<SegmentGroup.Indicator />
			{values.map((value) => {
				return (
					<SegmentGroup.Item
						key={value.value}
						value={value.value}
					>
						<SegmentGroup.ItemText>{value.label}</SegmentGroup.ItemText>
						<SegmentGroup.ItemHiddenInput />
					</SegmentGroup.Item>
				);
			})}
		</SegmentGroup>
	);
}
