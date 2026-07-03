import { Avatar, Badge, Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const placements = ["top-left", "top-right"];
type Placement = Badge["RootProps"]["placement"];

const meta = preview.meta({
	title: "Placements",
	component: Badge,
});

export const Placements = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Control the indicator's position with the placement prop.",
			},
		},
	},
	render: (args) => {
		const [value, setValue] = useState("top-left");

		return (
			<Container maxW="20rem">
				<Stack
					direction="column"
					gap="16"
					align="center"
				>
					<SegmentGroup
						w="11rem"
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
						{placements.map((placement) => (
							<SegmentGroup.Item
								value={placement}
								key={placement}
							>
								<SegmentGroup.ItemText>{placement}</SegmentGroup.ItemText>
								<SegmentGroup.ItemHiddenInput />
							</SegmentGroup.Item>
						))}
					</SegmentGroup>
					<Badge
						{...args}
						size="sm"
						placement={value as Placement}
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
