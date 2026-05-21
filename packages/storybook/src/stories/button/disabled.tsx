import preview from "@.storybook/preview";
import { Button } from "@moto-ui/react";

const meta = preview.meta({
	title: "Disabled",
	component: Button,
});

export const Disabled = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use icons within a button",
			},
		},
	},
	render: () => {
		return (
			<Button
				disabled
				rounded="24"
			>
				Sponsor
			</Button>
		);
	},
});
