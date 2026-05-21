import { Avatar, Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const sizes = ["xs", "sm", "md", "lg", "xl"];
type Size = Avatar["RootProps"]["size"];

export function Sizes() {
	const [value, setValue] = useState("md");

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
					{sizes.map((size) => (
						<SegmentGroup.Item
							value={size}
							key={size}
						>
							<SegmentGroup.ItemText>{size}</SegmentGroup.ItemText>
							<SegmentGroup.ItemHiddenInput />
						</SegmentGroup.Item>
					))}
				</SegmentGroup>
				<Avatar size={value as Size}>
					<Avatar.Image
						src="https://images.pexels.com/photos/12698114/pexels-photo-12698114.jpeg?w=200&h=200"
						alt=""
					/>
					<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
				</Avatar>
			</Stack>
		</Container>
	);
}
