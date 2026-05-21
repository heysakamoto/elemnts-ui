import {
	Box,
	Collapsible,
	Grid,
	Icon,
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
			my="20"
			delta={0}
			rounded="0"
			elevated={false}
			fontFamily="mono"
			data-table-part="table"
		>
			{/*Table header*/}
			<Surface.Header data-table-part="thead">
				{/*Table header row*/}
				<Surface
					w="full"
					delta={6}
					rounded="0"
					elevated={false}
				>
					<Grid
						cols={{
							base: "7rem minmax(0, 1fr)",
							md: "10rem minmax(0, 1fr)",
						}}
						data-table-part="tr"
					>
						{/*Table header cells*/}
						{head.texts
							.filter((_, idx) => idx < 2)
							.map((text, idx) => {
								const key = idx.toString();

								return (
									<TableCell
										key={key}
										fontWeight="500"
										color="fg.secondary"
										data-table-part="th"
									>
										{text}
									</TableCell>
								);
							})}
					</Grid>
				</Surface>
			</Surface.Header>
			{/*Table body*/}
			<Surface.Content
				divideY="1px"
				divideStyle="solid"
				divideColor="stroke.tertiary"
				data-table-part="tbody"
			>
				{/*Table body rows*/}
				{rows.nodes.map((row, idx) => {
					const key = idx.toString();
					const data = analyzeChildren(extractChildren(row));

					return (
						<Collapsible
							key={key}
							unstyled
							lazyMount
							unmountOnExit
						>
							<Collapsible.Trigger
								w="full"
								unstyled
								display="grid"
								cols={{
									base: "7rem minmax(0, 1fr)",
									md: "10rem minmax(0, 1fr)",
								}}
								css={{
									"&:is(:hover, [data-state=open])": {
										bgColor:
											"color-mix(in oklab, {colors.bg.secondary} 25%, {colors.transparent})",
									},
								}}
							>
								{data.texts
									.filter((_, idx) => idx < 2)
									.map((text, idx) => {
										const key = idx.toString();

										switch (idx) {
											case 0: {
												return (
													<TableCell
														key={key}
														color="fg.primary"
													>
														{text}
													</TableCell>
												);
											}
											case 1: {
												return (
													<TableCell
														key={key}
														gap="12"
														display="flex"
														align="center"
														color="fg.secondary"
														justify="space-between"
													>
														<Text
															as="span"
															overflow="hidden"
															whiteSpace="nowrap"
															textOverflow="ellipsis"
														>
															{text}
														</Text>
														<Collapsible.Indicator as="span">
															<Icon
																width={14}
																height={14}
																icon="tabler:chevron-down"
															/>
														</Collapsible.Indicator>
													</TableCell>
												);
											}
											default: {
												return null;
											}
										}
									})}
							</Collapsible.Trigger>
							<Collapsible.Content>
								<Grid
									py="8"
									cols={{
										base: "7rem minmax(0, 1fr)",
										md: "10rem minmax(0, 1fr)",
									}}
								>
									<Text
										px="16"
										as="span"
										fontSize="12"
										color="fg.secondary"
									>
										{head.texts[0]}
									</Text>
									<Box
										px="16"
										fontSize="12"
										overflowX="scroll"
										scrollbar="hidden"
									>
										{replaceNodeType(data.nodes[0], "p")}
									</Box>
								</Grid>
								<Grid
									py="8"
									cols={{
										base: "7rem minmax(0, 1fr)",
										md: "10rem minmax(0, 1fr)",
									}}
								>
									<Text
										px="16"
										as="span"
										fontSize="12"
										color="fg.secondary"
									>
										{head.texts[1]}
									</Text>
									<Box
										px="16"
										fontSize="12"
										overflowX="scroll"
										scrollbar="hidden"
									>
										{replaceNodeType(data.nodes[1], "p")}
									</Box>
								</Grid>
								{head.texts[2] && (
									<Grid
										py="8"
										cols={{
											base: "7rem minmax(0, 1fr)",
											md: "10rem minmax(0, 1fr)",
										}}
									>
										<Text
											px="16"
											as="span"
											fontSize="12"
											color="fg.secondary"
										>
											{head.texts[2]}
										</Text>
										<Box
											px="16"
											fontSize="12"
											overflowX="scroll"
											scrollbar="hidden"
										>
											{replaceNodeType(data.nodes[2], "p")}
										</Box>
									</Grid>
								)}
								{head.texts[3] && (
									<Grid
										py="8"
										cols={{
											base: "7rem minmax(0, 1fr)",
											md: "10rem minmax(0, 1fr)",
										}}
									>
										<Text
											px="16"
											as="span"
											fontSize="12"
											color="fg.secondary"
										>
											{head.texts[3]}
										</Text>
										<Box
											px="16"
											fontSize="12"
											overflowX="scroll"
											scrollbar="hidden"
										>
											{replaceNodeType(data.nodes[3], "p")}
										</Box>
									</Grid>
								)}
							</Collapsible.Content>
						</Collapsible>
					);
				})}
			</Surface.Content>
		</Surface>
	);
}

export function TableCell(props: TextProps) {
	const { ...restProps } = props;

	return (
		<Text
			px="16"
			py="10"
			fontSize="12"
			textAlign="left"
			overflow="hidden"
			whiteSpace="nowrap"
			textOverflow="ellipsis"
			{...restProps}
		/>
	);
}
