import { Avatar, Badge, Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const variants = ["primary", "secondary", "tertiary"];
type Variant = Badge["RootProps"]["variant"];

const meta = preview.meta({
	title: "Variants",
	component: Badge,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Control the indicator's appearance with the variant prop.",
			},
		},
	},
	render: (args) => {
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
					<Badge
						{...args}
						size="sm"
						variant={value as Variant}
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
