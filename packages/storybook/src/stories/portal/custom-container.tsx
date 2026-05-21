import preview from "@.storybook/preview";
import { Portal, Stack, Surface } from "@moto-ui/react";
import { useRef } from "react";

const meta = preview.meta({
	title: "Custom Container",
	component: Portal,
});

export const CustomContainer = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"By default, the `Portal` renders into `document.body`. You can specify a custom container by passing a ref to the `container` prop.",
			},
		},
	},
	render: () => {
		const containerRef = useRef<HTMLDivElement>(null);
		return (
			<Stack
				gap="4"
				ref={containerRef}
			>
				<Portal container={containerRef}>
					<Surface
						p="8"
						delta={1}
					>
						<Surface.Title fontSize="14">
							Portalled into the dashed box
						</Surface.Title>
					</Surface>
				</Portal>
			</Stack>
		);
	},
});
