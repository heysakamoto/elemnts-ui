import preview from "@.storybook/preview";
import { Item, RadioGroup, Radiomark } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: RadioGroup,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The RadioGroup component allows users to select a single option from a set of mutually exclusive choices.",
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
