import preview from "@.storybook/preview";
import { Avatar, Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const variants = ["primary", "secondary", "tertiary", "surface"] as const;
type Variant = (typeof variants)[number];

const meta = preview.meta({
	title: "Variants",
	component: Avatar,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Switch the avatar’s visual style using the `variant` prop. Supported variants are `primary`, `secondary`, `tertiary`, and `surface`.",
			},
		},
	},
	render: (args) => {
		const [value, setValue] = useState<Variant>("primary");

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
							const v = (e.value as Variant) ?? "primary";
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
					<Avatar
						{...args}
						variant={value}
					>
						<Avatar.Fallback fontSize="14">Bo</Avatar.Fallback>
					</Avatar>
				</Stack>
			</Container>
		);
	},
});
