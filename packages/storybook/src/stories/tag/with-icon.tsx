import preview from "@.storybook/preview";
import { Icon, Tag } from "@moto-ui/react";

const meta = preview.meta({
	title: "With Icon",
	component: Tag,
});

export const WithIcon = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can add icon to a tag to provide more context. Use the `iconOnly` prop for tags that only contain an icon.",
			},
		},
	},
	render: () => (
		<Tag>
			<Icon
				ml="-2"
				icon="tabler:tag"
				width={16}
				height={16}
			/>
			With Icon
		</Tag>
	),
});
