import preview from "@.storybook/preview";
import {
	Container,
	SegmentGroup,
	Stack,
	Textarea,
	type TextareaProps,
} from "@moto-ui/react";
import { useState } from "react";

const variants = ["primary", "secondary", "tertiary"];
type Variant = TextareaProps["variant"];

const meta = preview.meta({
	title: "Variants",
	component: Textarea,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the variant prop to change the visual style of the textarea.",
			},
		},
	},
	render: (args) => {
		const [value, setValue] = useState(variants[0]);

		return (
			<Container maxW="20rem">
				<Stack
					gap="16"
					align="center"
					w="full"
					direction="column"
				>
					<SegmentGroup
						maxW="15rem"
						size="xs"
						orientation="horizontal"
						fontFamily="mono"
						value={value}
						onValueChange={(e) => setValue(e.value ?? "")}
					>
						<SegmentGroup.Indicator />
						{variants.map((variant) => (
							<SegmentGroup.Item
								key={variant}
								value={variant}
							>
								<SegmentGroup.ItemText
									fontSize="12"
									textTransform="capitalize"
								>
									{variant}
								</SegmentGroup.ItemText>
								<SegmentGroup.ItemHiddenInput />
							</SegmentGroup.Item>
						))}
					</SegmentGroup>
					<Textarea
						{...args}
						rounded="16"
						variant={value as Variant}
						placeholder="Type your message here..."
					/>
				</Stack>
			</Container>
		);
	},
});
