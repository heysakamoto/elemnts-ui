import { DecorativeBox, Splitter } from "@moto-ui/react";

export default function MultiplePanels() {
	return (
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
	);
}
