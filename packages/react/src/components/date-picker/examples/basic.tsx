import {
	Button,
	Container,
	DatePicker,
	Group,
	Icon,
	Input,
	Portal,
	Surface,
} from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Container maxW="15rem">
			<DatePicker openOnClick>
				<DatePicker.Control>
					<Group w="full">
						<DatePicker.Input asChild>
							<Input w="full" />
						</DatePicker.Input>
					</Group>
				</DatePicker.Control>
				<Portal>
					<DatePicker.Positioner>
						<DatePicker.Content asChild>
							<Surface delta={1} rounded="18" colorPalette="neutral">
								<Surface.Content p="8">
									<DatePicker.View view="day">
										<DatePicker.Context>
											{(api) => (
												<>
													<DatePicker.ViewControl>
														<DatePicker.PrevTrigger asChild>
															<Button iconOnly size="sm" variant="ghost">
																<Icon
																	icon="tabler:chevron-left"
																	width={16}
																	height={16}
																/>
															</Button>
														</DatePicker.PrevTrigger>
														<DatePicker.RangeText textAlign="center" />
														<DatePicker.NextTrigger asChild>
															<Button iconOnly size="sm" variant="ghost">
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
																	{week.map((day, idx) => {
																		return (
																			<DatePicker.TableCell
																				key={idx.toString()}
																				value={day}
																			>
																				<DatePicker.TableCellTrigger>
																					{day.day}
																				</DatePicker.TableCellTrigger>
																			</DatePicker.TableCell>
																		);
																	})}
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
}
