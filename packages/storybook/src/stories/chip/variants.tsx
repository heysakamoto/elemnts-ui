import {
	Chip,
	type ChipProps,
	Container,
	SegmentGroup,
	Stack,
} from "@moto-ui/react";
import { useState } from "react";

import preview from "@.storybook/preview";

const variants = ["primary", "secondary", "tertiary"];
type Variant = ChipProps["variant"];

const meta = preview.meta({
	title: "Variants",
	component: Chip,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Change the component's visual style using the `variant` prop.",
			},
		},
	},
	render: () => {
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
					<Chip
						variant={value as Variant}
						rounded="24"
					>
						Chip
					</Chip>
				</Stack>
			</Container>
		);
	},
});
