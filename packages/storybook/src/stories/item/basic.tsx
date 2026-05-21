import preview from "@.storybook/preview";
import { Icon, Item, Text } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Item,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Item` component is a flexible primitive designed to be used in various contexts such as sidebars, menus, and lists. It provides consistent styling for hover, active, and disabled states.",
			},
		},
	},
	render: () => (
		<Item w="fit">
			<Icon
				icon="tabler:user"
				width={16}
				height={16}
			/>
			<Text>Profile</Text>
		</Item>
	),
});
