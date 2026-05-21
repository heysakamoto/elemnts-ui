import { DecorativeBox } from "@moto-ui/react";
import preview from "../../../.storybook/preview";

const meta = preview.meta({
	title: "Basic",
	component: DecorativeBox,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"By default, the `DecorativeBox` takes up the full width and height of its parent and has an outline and patterned background.",
			},
		},
	},
	render: () => <DecorativeBox>Decorative Box</DecorativeBox>,
});
