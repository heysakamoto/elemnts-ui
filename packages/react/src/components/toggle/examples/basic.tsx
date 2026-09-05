import { Icon, Item, Toggle } from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Toggle asChild aria-label="Toggle italic">
			<Item w="fit" variant="secondary">
				<Icon icon="tabler:italic" width={16} height={16} />
			</Item>
		</Toggle>
	);
}
