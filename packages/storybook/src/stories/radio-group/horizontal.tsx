import { Item, RadioGroup, Radiomark } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Horizontal",
	component: RadioGroup,
});

export const Horizontal = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					'Use the orientation="horizontal" prop to display the radio group items horizontally.',
			},
		},
	},
	render: (args) => {
		const options = [
			{ label: "Option A", value: "A" },
			{ label: "Option B", value: "B" },
			{ label: "Option C", value: "C" },
		];

		return (
			<RadioGroup.Root
				defaultValue="react"
				orientation="horizontal"
				gap="2"
				{...args}
			>
				{options.map((option) => (
					<RadioGroup.Item
						key={option.value}
						value={option.value}
					>
						<Item rounded="24">
							<RadioGroup.ItemControl>
								<RadioGroup.ItemContext>
									{(ctx) => {
										return <Radiomark checked={ctx.checked} />;
									}}
								</RadioGroup.ItemContext>
							</RadioGroup.ItemControl>
							<RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
							<RadioGroup.ItemHiddenInput />
						</Item>
					</RadioGroup.Item>
				))}
			</RadioGroup.Root>
		);
	},
});
