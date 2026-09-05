import { Container, DecorativeBox, Splitter } from "@elemnts-ui/react";

export default function MultiplePanels() {
	return (
		<Container maxW="32rem">
			<Splitter minH="200" panels={[{ id: "a" }, { id: "b" }, { id: "c" }]}>
				<Splitter.Panel id="a">
					<DecorativeBox h="full" />
				</Splitter.Panel>
				<Splitter.ResizeTrigger id="a:b" aria-label="Resize">
					<Splitter.ResizeTriggerIndicator />
				</Splitter.ResizeTrigger>
				<Splitter.Panel id="b">
					<DecorativeBox h="full" />
				</Splitter.Panel>
				<Splitter.ResizeTrigger id="b:c" aria-label="Resize">
					<Splitter.ResizeTriggerIndicator />
				</Splitter.ResizeTrigger>
				<Splitter.Panel id="c">
					<DecorativeBox h="full" />
				</Splitter.Panel>
			</Splitter>
		</Container>
	);
}
