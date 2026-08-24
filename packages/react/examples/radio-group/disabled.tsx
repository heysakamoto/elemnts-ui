import { Item, RadioGroup, Radiomark } from "@moto-ui/react";

export default function Disabled() {
	const options = [
		{ label: "Option A", value: "A", disabled: false },
		{ label: "Option B", value: "B", disabled: true },
		{ label: "Option C", value: "C", disabled: false },
	];

	return (
		<RadioGroup.Root
			defaultValue="react"
			gap="2"
		>
			{options.map((option) => (
				<RadioGroup.Item
					key={option.value}
					value={option.value}
					disabled={option.disabled}
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
}
