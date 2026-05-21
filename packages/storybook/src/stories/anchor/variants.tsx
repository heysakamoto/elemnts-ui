import preview from "@.storybook/preview";
import { Anchor, Container, SegmentGroup, Stack } from "@moto-ui/react";
import { useState } from "react";

const variants = ["primary", "secondary", "tertiary"];

const meta = preview.meta({
	title: "Variants",
	component: Anchor,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `variant` prop to customize the component's appearance.",
			},
		},
	},
	render: () => {
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
					{value === "primary" && <Anchor variant="primary">Primary</Anchor>}
					{value === "secondary" && (
						<Anchor variant="secondary">Secondary</Anchor>
					)}
					{value === "tertiary" && <Anchor variant="tertiary">Tertiary</Anchor>}
				</Stack>
			</Container>
		);
	},
});
