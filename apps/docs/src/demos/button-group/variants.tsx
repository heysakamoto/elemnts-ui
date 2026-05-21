import { ButtonGroup, Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const variants = ["secondary", "tertiary"];
type Variant = ButtonGroup["RootProps"]["variant"];

export function Variants() {
	const [value, setValue] = useState("secondary");

	return (
		<Container>
			<Stack
				direction="column"
				gap="16"
				align="center"
			>
				<SegmentGroup
					value={value}
					onValueChange={(e) => {
						const v = e.value ?? "";
						setValue(v);
					}}
					size="xs"
					fontFamily="mono"
					orientation="horizontal"
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
				<ButtonGroup
					attached
					variant={value as Variant}
				>
					<ButtonGroup.Item roundedStart="24">
						Good
						<ButtonGroup.Separator />
					</ButtonGroup.Item>
					<ButtonGroup.Item roundedEnd="24">Poor</ButtonGroup.Item>
				</ButtonGroup>
			</Stack>
		</Container>
	);
}
