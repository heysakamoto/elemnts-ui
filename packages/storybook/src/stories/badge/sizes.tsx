import preview from "@.storybook/preview";
import { Avatar, Badge, Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const sizes = ["xs", "sm", "md", "lg", "xl"];
type Size = Badge["RootProps"]["size"];

const meta = preview.meta({
	title: "Sizes",
	component: Badge,
});

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Control the indicator's size with the size prop.",
			},
		},
	},
	render: (args) => {
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
					<Badge
						{...args}
						size={value as Size}
					>
						<Avatar>
							<Avatar.Image src="https://images.pexels.com/photos/4611686/pexels-photo-4611686.jpeg?w=160&h=160" />
							<Avatar.Fallback fontSize="14">Ko</Avatar.Fallback>
						</Avatar>
						<Badge.Indicator />
					</Badge>
				</Stack>
			</Container>
		);
	},
});
