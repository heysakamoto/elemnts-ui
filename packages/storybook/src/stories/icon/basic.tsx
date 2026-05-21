import preview from "@.storybook/preview";
import { Icon } from "@moto-ui/react";

const meta = preview.meta({
	title: "Basic",
	component: Icon,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the Icon component to render a scalable SVG glyph that aligns with the design system. Under the hood, it uses [@iconify/react](https://iconify.design/docs/icon-components/react/) to resolve and render icons. Icons are vector-based and typically inherit color from the current text color (currentColor) unless overridden with CSS.",
			},
		},
	},
	render: (args) => (
		<Icon
			{...args}
			icon="tabler:heart"
		/>
	),
});
