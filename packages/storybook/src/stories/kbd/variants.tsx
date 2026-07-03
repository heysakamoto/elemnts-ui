import { KbdRoot as Kbd, KbdItem } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Variants",
	component: Kbd,
});

export const Variants = meta.story({
	parameters: {
		docs: {
			description: {
				story: "Use the `variant` prop to change the visual style of keys.",
			},
		},
	},
	render: () => (
		<div style={{ display: "flex", gap: "8px" }}>
			{(["primary", "secondary", "tertiary", "surface", "ghost"] as const).map(
				(variant) => (
					<Kbd
						key={variant}
						variant={variant}
					>
						<KbdItem>⌘ K</KbdItem>
					</Kbd>
				),
			)}
		</div>
	),
});
