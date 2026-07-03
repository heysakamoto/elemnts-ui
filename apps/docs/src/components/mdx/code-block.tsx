import { Icon, SegmentGroup, Surface, Text } from "@moto-ui/react";
import { type ReactElement, type ReactNode, useState } from "react";

import { CodeBlockProvider, useCodeBlockTabsContext } from "./client";
import { CopyButton } from "./copy-button";
import { nodeToString } from "@/utils/react-node";

const items = [
	{
		id: "1",
		value: "pre-line",
		icon: "tabler:text-wrap",
		label: "Enable text wrapping",
	},
	{
		id: "2",
		value: "pre",
		label: "Disable text wrapping",
		icon: "tabler:text-wrap-disabled",
	},
];

type CodeBlockProps = {
	title?: string;
	icon?: ReactNode;
	lang?: string;
	children?: ReactElement<any>;
};

export const CodeBlock = (props: CodeBlockProps) => {
	const { title, lang, children } = props;
	const inTabs = useCodeBlockTabsContext();
	const [whiteSpace, setWhiteSpace] = useState("pre");

	switch (true) {
		case inTabs: {
			return children;
		}

		default: {
			const code = nodeToString(children);

			return (
				<CodeBlockProvider>
					<Surface
						my="20"
						delta={1}
						rounded="24"
						data-language={lang}
					>
						<Surface.Header
							m="8"
							align="center"
							direction="row"
							justify="space-between"
						>
							<Surface
								w="auto"
								delta={6}
								rounded="full"
								elevated={false}
							>
								<SegmentGroup.Root
									w="4.5rem"
									size="xs"
									value={whiteSpace}
									orientation="horizontal"
									onValueChange={(d) => setWhiteSpace(d.value ?? "")}
								>
									<SegmentGroup.Indicator />
									{items.map((item) => {
										const key = item.id;
										const value = item.value;

										return (
											<SegmentGroup.Item
												key={key}
												value={value}
												aria-label={item.label}
											>
												<Icon
													icon={item.icon}
													width={16}
													height={16}
												/>
												<SegmentGroup.ItemHiddenInput />
											</SegmentGroup.Item>
										);
									})}
								</SegmentGroup.Root>
							</Surface>

							<Surface.Description
								fontSize="12"
								fontFamily="mono"
								fontStyle="italic"
							>
								{title}
							</Surface.Description>

							<CopyButton value={code} />
						</Surface.Header>

						<Surface.Content
							my="8"
							mx="12"
							maxH="32rem"
							overflow="scroll"
							scrollbar="hidden"
						>
							<Text
								as="code"
								fontSize="12"
								fontFamily="mono"
								css={{
									"& span.line": {
										whiteSpace,
										lineHeight: "2",
										display: "block",
										"& span": {
											color: "var(--shiki-light)",
											_dark: {
												color: "var(--shiki-dark)",
											},
										},
									},
								}}
							>
								{children}
							</Text>
						</Surface.Content>
					</Surface>
				</CodeBlockProvider>
			);
		}
	}
};

CodeBlock.displayName = "CodeBlock";
