import { For, Stack, Text } from "@moto-ui/react";

export const Basic = () => {
	const items = ["Apple", "Banana", "Cherry"];

	return (
		<Stack
			gap="2"
			direction="column"
		>
			<For each={items}>
				{(item, index) => (
					<Text key={index}>
						{index + 1}. {item}
					</Text>
				)}
			</For>
		</Stack>
	);
};
