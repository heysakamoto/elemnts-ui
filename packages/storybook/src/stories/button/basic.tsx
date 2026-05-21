import preview from "@.storybook/preview";
import { Button } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Button,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Button` component streamlines styling with design tokens and an intuitive API for responsive interfaces.",
			},
		},
	},
	render: () => {
		return <Button rounded="24">Sponsor</Button>;
	},
});
