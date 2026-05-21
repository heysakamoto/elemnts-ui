import preview from "@.storybook/preview";
import { KbdRoot as Kbd, KbdItem } from "@moto-ui/react";

const meta = preview.meta({
	title: "Inline",
	component: Kbd,
});

export const Inline = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Place `Kbd` within text to render keys inline.",
			},
		},
	},
	render: () => (
		<p>
			Use{" "}
			<Kbd
				variant="secondary"
				colorPalette="neutral"
			>
				<KbdItem>⌘ K</KbdItem>
			</Kbd>{" "}
			to open the command palette.
		</p>
	),
});
