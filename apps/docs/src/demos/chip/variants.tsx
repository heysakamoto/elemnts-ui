import {
	Chip,
	type ChipProps,
	Container,
	SegmentGroup,
	Stack,
} from "@moto-ui/react";
import { useState } from "react";

const variants = ["primary", "secondary", "tertiary"];
type Variant = ChipProps["variant"];

export function Variants() {
	const [value, setValue] = useState("primary");

	return (
		<Container>
			<Stack
				direction="column"
				gap="16"
				align="center"
			>
				<SegmentGroup
					size="xs"
					fontFamily="mono"
					orientation="horizontal"
					value={value}
					onValueChange={(e) => {
						const v = e.value ?? "";
						setValue(v);
					}}
				>
					<SegmentGroup.Indicator />
					{variants.map((variant) => (
						<SegmentGroup.Item
							value={variant}
							key={variant}
						>
							<SegmentGroup.ItemText>{variant}</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
				<Chip
					variant={value as Variant}
					rounded="24"
				>
					Chip
				</Chip>
			</Stack>
		</Container>
	);
}
