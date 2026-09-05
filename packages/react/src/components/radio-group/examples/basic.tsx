import { RadioGroup } from "@elemnts-ui/react";

export default function Basic() {
	const options = [
		{ label: "Option A", value: "A" },
		{ label: "Option B", value: "B" },
		{ label: "Option C", value: "C" },
	];

	return (
		<RadioGroup.Root defaultValue="react">
			{options.map((option) => (
				<RadioGroup.Item key={option.value} value={option.value}>
					<RadioGroup.ItemControl />
					<RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
					<RadioGroup.ItemHiddenInput />
				</RadioGroup.Item>
			))}
		</RadioGroup.Root>
	);
}
