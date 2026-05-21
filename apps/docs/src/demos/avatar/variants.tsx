import { Avatar, Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const variants = ["primary", "secondary", "tertiary"];
type Variant = Avatar["RootProps"]["variant"];

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
				<Avatar variant={value as Variant}>
					<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
				</Avatar>
			</Stack>
		</Container>
	);
}
