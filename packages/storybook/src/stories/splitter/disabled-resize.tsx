import preview from "@.storybook/preview";
import { DecorativeBox, Splitter } from "@moto-ui/react";

const meta = preview.meta({
	title: "Layouts/Splitter",
	component: Splitter,
});

export const DisabledResize = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"Use the `disabled` prop on a `Splitter.ResizeTrigger` to prevent resizing.",
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
				disabled
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
