import { Item, RadioGroup, Radiomark } from "@moto-ui/react";

export const Horizontal = () => {
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
};
