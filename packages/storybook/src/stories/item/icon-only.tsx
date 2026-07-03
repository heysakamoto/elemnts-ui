import { Icon, Item } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Icon Only",
	component: Item,
});

export const IconOnly = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `iconOnly` prop to create compact items that only contain an icon.",
			},
		},
	},
	render: () => (
		<Item
			iconOnly
			size="sm"
		>
			<Icon
				icon="tabler:plus"
				width={16}
				height={16}
			/>
		</Item>
	),
});
