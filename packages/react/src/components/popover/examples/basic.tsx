import {
	Button,
	DataList,
	Field,
	For,
	Group,
	Icon,
	Input,
	Item,
	Menu,
	Popover,
	Portal,
	Surface,
} from "@elemnts-ui/react";

export default function Basic() {
	return (
		<Popover>
			<Popover.Trigger asChild>
				<Button variant="surface">Open</Button>
			</Popover.Trigger>
			<Portal>
				<Popover.Positioner>
					<Popover.Content asChild>
						<Surface delta={1} rounded="12" w="24rem" colorPalette="neutral">
							<Surface.Header px="12" pt="12">
								<Surface.Title>Dimensions</Surface.Title>
							</Surface.Header>
							<Surface.Content p="12">
								<DataList orientation="horizontal" gap="6">
									<DataListItem label="Width" defaultValue="640" />
									<DataListItem label="Max. Width" />
									<DataListItem label="Height" defaultValue="64" />
									<DataListItem label="Max. Height" />
								</DataList>
							</Surface.Content>
						</Surface>
					</Popover.Content>
				</Popover.Positioner>
			</Portal>
		</Popover>
	);
}

const measurements = [
	{ label: "PX", value: "px" },
	{ label: "EM", value: "em" },
	{ label: "REM", value: "rem" },
	{ label: "VW", value: "vw" },
	{ label: "VH", value: "vh" },
	{ label: "VMIN", value: "vmin" },
	{ label: "VMAX", value: "vmax" },
];

type DataListItemProps = {
	label?: string;
	defaultValue?: string;
};

export function DataListItem({
	label = "Width",
	defaultValue = "0",
}: DataListItemProps) {
	return (
		<Field>
			<DataList.Item align="center" gap="0">
				<DataList.ItemLabel minW="4rem" asChild>
					<Field.Label>{label}</Field.Label>
				</DataList.ItemLabel>
				<DataList.ItemValue asChild>
					<Group attached>
						<Field.Input asChild>
							<Input size="sm" roundedEnd="0" defaultValue={defaultValue} />
						</Field.Input>
						<Menu>
							<Menu.Trigger asChild>
								<Button size="sm" variant="surface" roundedStart="0">
									px
									<Icon icon="tabler:chevron-down" mr="-4" />
								</Button>
							</Menu.Trigger>
							<Portal>
								<Menu.Positioner>
									<Menu.Content asChild>
										<Surface w="6rem" rounded="12" colorPalette="neutral">
											<Surface.Content p="4" gap="2">
												<For each={measurements}>
													{(measurement) => (
														<Menu.Item
															key={measurement.value}
															value={measurement.value}
															asChild
														>
															<Item size="sm" variant="secondary">
																{measurement.value}
															</Item>
														</Menu.Item>
													)}
												</For>
											</Surface.Content>
										</Surface>
									</Menu.Content>
								</Menu.Positioner>
							</Portal>
						</Menu>
					</Group>
				</DataList.ItemValue>
			</DataList.Item>
		</Field>
	);
}
