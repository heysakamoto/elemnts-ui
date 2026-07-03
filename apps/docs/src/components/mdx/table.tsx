import {
	Collapsible,
	DataList,
	Icon,
	Show,
	Surface,
	Text,
	type TextProps,
} from "@moto-ui/react";

import {
	analyzeChildren,
	extractChildren,
	replaceNodeType,
} from "@/utils/react-node";

type TableBaseProps = {
	children?: React.ReactNode;
};

export function Table(props: TableBaseProps) {
	const table = analyzeChildren(props.children);

	const [thead, tbody] = table.nodes;

	const headRow = extractChildren(thead);
	const bodyRows = extractChildren(tbody);

	const head = analyzeChildren(extractChildren(headRow));

	const rows = analyzeChildren(bodyRows);

	return (
		<Surface
			p="0"
			my="20"
			delta={1}
			rounded="24"
			fontFamily="mono"
			data-table-part="table"
			css={{
				"--table-layout": {
					base: "minmax(4rem, 6rem) minmax(0, 1fr)",
					md: "minmax(6rem, 9rem) minmax(0, 1fr)",
				},
			}}
		>
			{/*Table header*/}
			<Surface.Header data-table-part="thead">
				{/*Table header row*/}
				<DataList
					w="full"
					orientation="horizontal"
				>
					<DataList.Item
						py="10"
						fontSize="12"
						data-table-part="tr"
						cols="var(--table-layout)"
					>
						<DataList.ItemLabel>
							<TableCell>{head.texts[0]}</TableCell>
						</DataList.ItemLabel>
						<DataList.ItemLabel>
							<TableCell>{head.texts[1]}</TableCell>
						</DataList.ItemLabel>
					</DataList.Item>
				</DataList>
			</Surface.Header>
			{/*Table body*/}
			<Surface.Content>
				{/*Table body rows*/}
				{rows.nodes.map((row, idx) => {
					const key = idx.toString();
					const data = analyzeChildren(extractChildren(row));

					return (
						<Collapsible
							key={key}
							unstyled
						>
							<Collapsible.Trigger
								w="full"
								asChild
								unstyled
								css={{
									_open: {
										bgColor: { base: "surface.7", _dark: "surface.3" },
									},
								}}
							>
								<DataList
									as="button"
									orientation="horizontal"
								>
									<DataList.Item
										py="10"
										fontSize="12"
										cols="var(--table-layout)"
									>
										<DataList.ItemLabel>
											<TableCell
												key={key}
												color="accent.primary"
											>
												{data.texts[0]}
											</TableCell>
										</DataList.ItemLabel>
										<DataList.ItemValue
											align="center"
											justify="space-between"
										>
											<TableCell>{data.texts[1]}</TableCell>
											<Icon
												mr="12"
												width={14}
												height={14}
												color="icon.secondary"
												icon="tabler:chevron-down"
											/>
										</DataList.ItemValue>
									</DataList.Item>
								</DataList>
							</Collapsible.Trigger>
							<Collapsible.Content>
								<DataList
									py="10"
									orientation="horizontal"
								>
									<DataList.Item
										fontSize="12"
										cols="var(--table-layout)"
									>
										<DataList.ItemLabel
											px="16"
											color="fg.secondary"
										>
											{head.texts[0]}
										</DataList.ItemLabel>
										<DataList.ItemValue
											px="16"
											overflowX="scroll"
											scrollbar="hidden"
										>
											{replaceNodeType(data.nodes[0], "p")}
										</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item
										py="4"
										fontSize="12"
										cols="var(--table-layout)"
									>
										<DataList.ItemLabel
											px="16"
											color="fg.secondary"
										>
											{head.texts[1]}
										</DataList.ItemLabel>
										<DataList.ItemValue
											px="16"
											overflowX="scroll"
											scrollbar="hidden"
										>
											{replaceNodeType(data.nodes[1], "p")}
										</DataList.ItemValue>
									</DataList.Item>
									<Show when={head.texts[2]}>
										<DataList.Item
											fontSize="12"
											cols="var(--table-layout)"
										>
											<DataList.ItemLabel
												px="16"
												color="fg.secondary"
											>
												{head.texts[2]}
											</DataList.ItemLabel>
											<DataList.ItemValue
												px="16"
												overflowX="scroll"
												scrollbar="hidden"
											>
												{replaceNodeType(data.nodes[2], "p")}
											</DataList.ItemValue>
										</DataList.Item>
									</Show>
									<Show when={head.texts[3]}>
										<DataList.Item
											fontSize="12"
											cols="var(--table-layout)"
										>
											<DataList.ItemLabel
												px="16"
												color="fg.secondary"
											>
												{head.texts[3]}
											</DataList.ItemLabel>
											<DataList.ItemValue
												px="16"
												overflowX="scroll"
												scrollbar="hidden"
											>
												{replaceNodeType(data.nodes[3], "p")}
											</DataList.ItemValue>
										</DataList.Item>
									</Show>
								</DataList>
							</Collapsible.Content>
						</Collapsible>
					);
				})}
			</Surface.Content>
		</Surface>
	);
}

export function TableCell(props: TextProps) {
	return (
		<Text
			px="16"
			as="span"
			textAlign="left"
			overflow="hidden"
			whiteSpace="nowrap"
			textOverflow="ellipsis"
			{...props}
		/>
	);
}
