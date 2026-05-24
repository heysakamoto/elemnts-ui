import { For, Text } from "@moto-ui/react";

export const Fallback = () => {
	const items: string[] = [];

	return (
		<For
			each={items}
			fallback={<Text color="fg.muted">No items available.</Text>}
		>
			{(item, index) => <Text key={index}>{item}</Text>}
		</For>
	);
};
