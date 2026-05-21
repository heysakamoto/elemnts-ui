import preview from "@.storybook/preview";
import { Avatar, Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const sizes = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl"] as const;
type Size = (typeof sizes)[number];

const meta = preview.meta({
	title: "Sizes",
	component: Avatar,
});

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Control the avatar size with the `size` prop. Supported sizes are `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, and `2xl`.",
			},
		},
	},
	render: (args) => {
		const [value, setValue] = useState<Size>("md");

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
							const v = (e.value as Size) ?? "md";
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
					<Avatar
						{...args}
						size={value}
					>
						<Avatar.Image
							src="https://images.pexels.com/photos/12698114/pexels-photo-12698114.jpeg?w=200&h=200"
							alt=""
						/>
						<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
					</Avatar>
				</Stack>
			</Container>
		);
	},
});
