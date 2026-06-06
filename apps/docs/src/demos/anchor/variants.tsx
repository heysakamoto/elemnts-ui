import { Anchor, Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const variants = ["primary", "secondary", "tertiary"];

export function Variants() {
	const [value, setValue] = useState("primary");

	return (
		<Container>
			<Stack
				direction="column"
				gap="12"
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
							key={variant}
							value={variant}
						>
							<SegmentGroup.ItemText>{variant}</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
				{value === "primary" && (
					<Anchor
						fontSize="14"
						variant="primary"
					>
						Primary
					</Anchor>
				)}
				{value === "secondary" && (
					<Anchor
						fontSize="14"
						variant="secondary"
					>
						Secondary
					</Anchor>
				)}
				{value === "tertiary" && (
					<Anchor
						fontSize="14"
						variant="tertiary"
					>
						Tertiary
					</Anchor>
				)}
			</Stack>
		</Container>
	);
}
