import { SegmentGroup } from "@elemnts-ui/react";

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
			label: "Elemnts",
			value: "Elemnts",
		},
	];

	return (
    <SegmentGroup
      size="xs"
      defaultValue="ark"
      variant="secondary"
      orientation="horizontal"
    >
      <SegmentGroup.Indicator />
      {values.map((value) => {
        return (
          <SegmentGroup.Item key={value.value} value={value.value}>
            <SegmentGroup.ItemText fontSize="14">
              {value.label}
            </SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        );
      })}
    </SegmentGroup>
  );
}
