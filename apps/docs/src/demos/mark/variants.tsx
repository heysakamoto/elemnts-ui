import { Container, Mark, SegmentGroup, Stack, Text } from "@moto-ui/react";
import { useState } from "react";

const variants = ["primary", "secondary", "tertiary", "underline"];
type Variant = "primary" | "secondary" | "tertiary" | "underline";

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
				<Text fontSize="16">
					This text is styled with the{" "}
					<Mark variant={value as Variant}>{value}</Mark> variant.
				</Text>
			</Stack>
		</Container>
	);
}
