import preview from "@.storybook/preview";
import { KbdRoot as Kbd, KbdItem } from "@moto-ui/react";

const meta = preview.meta({
	title: "Palettes",
	component: Kbd,
});

export const Palettes = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `colorPalette` prop to apply different color themes to keys.",
			},
		},
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px" }}>
			{(
				["accent", "neutral", "warning", "success", "destructive"] as const
			).map((palette) => (
				<Kbd
					key={palette}
					colorPalette={palette}
				>
					<KbdItem>⌘ K</KbdItem>
				</Kbd>
			))}
		</div>
	),
});
