import { DecorativeBox, Splitter } from "@elemnts-ui/react";

export default function Vertical() {
	return (
		<Splitter
			minH="200"
			maxW="20rem"
			panels={[{ id: "a" }, { id: "b" }]}
			orientation="vertical"
		>
			<Splitter.Panel id="a">
				<DecorativeBox h="full" />
			</Splitter.Panel>
			<Splitter.ResizeTrigger id="a:b" aria-label="Resize">
				<Splitter.ResizeTriggerIndicator />
			</Splitter.ResizeTrigger>
			<Splitter.Panel id="b">
				<DecorativeBox h="full" />
			</Splitter.Panel>
		</Splitter>
	);
}
