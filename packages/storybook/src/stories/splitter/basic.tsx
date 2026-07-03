import { DecorativeBox, Splitter } from "@moto-ui/react";

import preview from "@.storybook/preview";

const meta = preview.meta({
	title: "Layouts/Splitter",
	component: Splitter,
});

export const Basic = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"The `Splitter` component allows users to resize panels in a layout. It supports both horizontal and vertical orientations.",
			},
		},
	},
	render: () => (
		<Splitter
			minH="200"
			maxW="20rem"
			panels={[{ id: "a" }, { id: "b" }]}
		>
			<Splitter.Panel id="a">
				<DecorativeBox h="full" />
			</Splitter.Panel>
			<Splitter.ResizeTrigger
				id="a:b"
				aria-label="Resize"
			>
				<Splitter.ResizeTriggerIndicator />
				<Splitter.ResizeTriggerSeparator />
			</Splitter.ResizeTrigger>
			<Splitter.Panel id="b">
				<DecorativeBox h="full" />
			</Splitter.Panel>
		</Splitter>
	),
});
