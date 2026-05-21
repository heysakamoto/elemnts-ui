import {
	Button,
	Container,
	DatePicker,
	Group,
	Icon,
	Input,
	Portal,
	Surface,
} from "@moto-ui/react";

export const Range = () => {
	return (
		<Container maxW="15rem">
			<DatePicker selectionMode="range">
				<DatePicker.Control>
					<Group attached>
						<DatePicker.Input asChild>
							<Input roundedLeft="24px" />
						</DatePicker.Input>
						<DatePicker.Trigger asChild>
							<Button
								variant="tertiary"
								colorPalette="neutral"
								roundedRight="24px"
								css={{
									"&:not(:hover)": {
										color: "icon.secondary",
									},
								}}
							>
								<Icon
									icon="tabler:adjustments-horizontal"
									width={16}
									height={16}
								/>
							</Button>
						</DatePicker.Trigger>
					</Group>
				</DatePicker.Control>
				<Portal>
					<DatePicker.Positioner>
						<DatePicker.Content asChild>
							<Surface
								delta={1}
								colorPalette="neutral"
								rounded="24"
								css={{
									"--date-picker-border-radius": "24px",
								}}
							>
								<Surface.Content p="6">
									<DatePicker.View view="day">
										<DatePicker.Context>
											{(api) => (
												<>
													<DatePicker.ViewControl>
														<DatePicker.PrevTrigger asChild>
															<Button
																iconOnly
																size="sm"
																variant="ghost"
																colorPalette="neutral"
																rounded="calc(24px - 4px)"
															>
																<Icon
																	icon="tabler:chevron-left"
																	width={16}
																	height={16}
																/>
															</Button>
														</DatePicker.PrevTrigger>
														<DatePicker.RangeText
															flexGrow="1"
															textAlign="center"
														/>
														<DatePicker.NextTrigger asChild>
															<Button
																iconOnly
																size="sm"
																variant="ghost"
																colorPalette="neutral"
																rounded="calc(24px - 4px)"
															>
																<Icon
																	icon="tabler:chevron-right"
																	width={16}
																	height={16}
																/>
															</Button>
														</DatePicker.NextTrigger>
													</DatePicker.ViewControl>
													<DatePicker.Table mt="12">
														<DatePicker.TableHead>
															<DatePicker.TableRow>
																{api.weekDays.map((weekDay, idx) => (
																	<DatePicker.TableHeader key={idx.toString()}>
																		{weekDay.narrow}
																	</DatePicker.TableHeader>
																))}
															</DatePicker.TableRow>
														</DatePicker.TableHead>
														<DatePicker.TableBody>
															{api.weeks.map((week, idx) => (
																<DatePicker.TableRow key={idx.toString()}>
																	{week.map((day, idx) => (
																		<DatePicker.TableCell
																			key={idx.toString()}
																			value={day}
																		>
																			<DatePicker.TableCellTrigger>
																				{day.day}
																			</DatePicker.TableCellTrigger>
																		</DatePicker.TableCell>
																	))}
																</DatePicker.TableRow>
															))}
														</DatePicker.TableBody>
													</DatePicker.Table>
												</>
											)}
										</DatePicker.Context>
									</DatePicker.View>
								</Surface.Content>
							</Surface>
						</DatePicker.Content>
					</DatePicker.Positioner>
				</Portal>
			</DatePicker>
		</Container>
	);
};
