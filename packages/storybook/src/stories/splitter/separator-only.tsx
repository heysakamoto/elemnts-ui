import preview from "@.storybook/preview";
import { DecorativeBox, Splitter } from "@moto-ui/react";

const meta = preview.meta({
	title: "Layouts/Splitter",
	component: Splitter,
});

export const SeparatorOnly = meta.story({
	parameters: {
		docs: {
			description: {
				story:
					"You can choose to only render the separator line for a more minimal look.",
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
				<Splitter.ResizeTriggerSeparator />
			</Splitter.ResizeTrigger>
			<Splitter.Panel id="b">
				<DecorativeBox h="full" />
			</Splitter.Panel>
		</Splitter>
	),
});
