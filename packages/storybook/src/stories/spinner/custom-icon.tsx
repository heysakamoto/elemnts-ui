import preview from "@.storybook/preview";
import { Icon, Spinner } from "@moto-ui/react";

const meta = preview.meta({
	title: "Custom Icon",
	component: Spinner,
});

export const CustomIcon = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can provide a custom icon or any other content to be animated by the spinner. The Spinner component will automatically apply the spinning animation to its direct SVG child.",
			},
		},
	},
	render: (args) => (
		<Spinner {...args}>
			<Icon
				icon="tabler:loader-2"
				width={16}
				height={16}
			/>
		</Spinner>
	),
});
