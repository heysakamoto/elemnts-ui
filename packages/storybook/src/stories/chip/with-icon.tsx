import preview from "@.storybook/preview";
import { Chip, Icon } from "@moto-ui/react";

const meta = preview.meta({
	title: "With Icon",
	component: Chip,
});

export const WithIcon = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Display an icon inside the chip.",
			},
		},
	},
	render: (args) => (
		<Chip
			colorPalette="success"
			rounded="24"
			{...args}
		>
			<Icon
				ml="-2"
				icon="tabler:check"
				width={18}
				height={18}
			/>
			Completed
		</Chip>
	),
});
