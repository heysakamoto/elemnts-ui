import preview from "@.storybook/preview";
import { Checkmark, Icon } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Checkmark,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story: "The basic implementation of the Checkmark component.",
			},
		},
	},
	render: () => (
		<Checkmark checked>
			<Icon
				icon="tabler:check"
				width={12}
				height={12}
			/>
		</Checkmark>
	),
});
