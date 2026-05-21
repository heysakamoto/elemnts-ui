import preview from "@.storybook/preview";
import { Anchor, factory } from "@moto-ui/react";
import type { ComponentProps } from "react";

const meta = preview.meta({
	title: "Routers",
	component: Anchor,
});

function Link(props: ComponentProps<(typeof factory)["a"]>) {
	return <factory.a {...props} />;
}

export const Routers = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `asChild` prop to compose Anchor with framework router links (e.g., Tanstack router `Link`).",
			},
		},
	},
	render: () => (
		<Anchor asChild>
			<Link
				href="https://ark-ui.com"
				target="_blank"
			>
				Reload
			</Link>
		</Anchor>
	),
});
