import preview from "@.storybook/preview";
import { KbdRoot as Kbd, KbdItem } from "@moto-ui/react";

const meta = preview.meta({
	title: "Navigation Keys",
	component: Kbd,
});

export const NavigationKeys = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"This example showcase different navigation keys such as ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Enter, PageUp, and PageDown.",
			},
		},
	},
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
			<div style={{ display: "flex", gap: "8px" }}>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>↑</KbdItem>
				</Kbd>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>↓</KbdItem>
				</Kbd>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>←</KbdItem>
				</Kbd>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>→</KbdItem>
				</Kbd>
			</div>
			<div style={{ display: "flex", gap: "8px" }}>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>↵</KbdItem>
				</Kbd>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>⇧</KbdItem>
				</Kbd>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>⌥</KbdItem>
				</Kbd>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>⌘</KbdItem>
				</Kbd>
			</div>
			<div style={{ display: "flex", gap: "8px" }}>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>⇞</KbdItem>
				</Kbd>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>⇟</KbdItem>
				</Kbd>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>↖</KbdItem>
				</Kbd>
				<Kbd
					variant="secondary"
					colorPalette="neutral"
				>
					<KbdItem>↗</KbdItem>
				</Kbd>
			</div>
		</div>
	),
});
