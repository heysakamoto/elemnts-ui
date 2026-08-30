import { Container, SegmentGroup } from "@moto-ui/react";

export default function Basic() {
	const options = [
		{ label: "Daily", value: "daily" },
		{ label: "Weekly", value: "weekly" },
		{ label: "Monthly", value: "monthly" },
	];

	return (
		<Container maxW="fit">
			<SegmentGroup.Root
				defaultValue="daily"
				orientation="horizontal"
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
	);
}
