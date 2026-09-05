import { RadioGroup } from "@elemnts-ui/react";

export default function Disabled() {
	const options = [
		{ label: "Option A", value: "A", disabled: false },
		{ label: "Option B", value: "B", disabled: true },
		{ label: "Option C", value: "C", disabled: false },
	];

	return (
		<RadioGroup.Root defaultValue="react">
			{options.map((option) => (
				<RadioGroup.Item
					key={option.value}
					value={option.value}
					disabled={option.disabled}
				>
					<RadioGroup.ItemControl />
					<RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
					<RadioGroup.ItemHiddenInput />
				</RadioGroup.Item>
			))}
		</RadioGroup.Root>
	);
}
