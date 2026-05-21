import preview from "@.storybook/preview";
import { DecorativeBox, Splitter } from "@moto-ui/react";

const meta = preview.meta({
	title: "Layouts/Splitter",
	component: Splitter,
});

export const MultiplePanels = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can create layouts with multiple resizable panels by defining more panel data and adding corresponding triggers.",
			},
		},
	},
	render: () => (
		<Splitter
			minH="200"
			maxW="26rem"
			panels={[{ id: "a" }, { id: "b" }, { id: "c" }]}
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
			<Splitter.ResizeTrigger
				id="b:c"
				aria-label="Resize"
			>
				<Splitter.ResizeTriggerIndicator />
				<Splitter.ResizeTriggerSeparator />
			</Splitter.ResizeTrigger>
			<Splitter.Panel id="c">
				<DecorativeBox h="full" />
			</Splitter.Panel>
		</Splitter>
	),
});
