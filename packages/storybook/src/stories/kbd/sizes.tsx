import preview from "@.storybook/preview";
import { KbdRoot as Kbd, KbdItem } from "@moto-ui/react";

const meta = preview.meta({
	title: "Sizes",
	component: Kbd,
});

export const Sizes = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the `size` prop to change the visual scale of keys.",
			},
		},
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px" }}>
			{(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
				<Kbd
					key={size}
					size={size}
				>
					<KbdItem>⌘ K</KbdItem>
				</Kbd>
			))}
		</div>
	),
});
