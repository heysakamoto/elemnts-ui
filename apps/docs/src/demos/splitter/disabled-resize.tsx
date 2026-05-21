import { DecorativeBox, Splitter } from "@moto-ui/react";

export function DisabledResize() {
	return (
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
	);
}
