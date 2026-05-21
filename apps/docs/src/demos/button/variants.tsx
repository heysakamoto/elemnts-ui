import {
	Button,
	type ButtonProps,
	Container,
	SegmentGroup,
	Stack,
} from "@moto-ui/react";
import { useState } from "react";

const variants = ["secondary", "tertiary"];
type Variant = ButtonProps["variant"];

export function Variants() {
	const [value, setValue] = useState("secondary");

	return (
		<Container>
			<Stack
				direction="column"
				gap="12"
				align="center"
			>
				<SegmentGroup
					size="xs"
					mx="auto"
					maxW="fit"
					value={value}
					fontFamily="mono"
					orientation="horizontal"
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
				<Button
					variant={value as Variant}
					rounded="24"
				>
					Call us
				</Button>
			</Stack>
		</Container>
	);
}
